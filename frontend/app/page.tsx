'use client'
import { useState } from 'react';

export default function Home() {
  const [features, setFeatures] = useState<string[]>(Array(30).fill(""));
  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (index: number, value: string) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const numericFeatures = features.map(f => parseFloat(f));
      if (numericFeatures.some(isNaN)) {
        setError("Please fill all features with valid numbers.");
        return;
      }

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: numericFeatures })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setPrediction(data.prediction);
    } catch (err: any) {
      setPrediction(null);
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Smart Factory Anomaly Detector</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-4 mb-6">
          {features.map((val, idx) => (
            <input
              key={idx}
              type="number"
              value={val}
              onChange={(e) => handleChange(idx, e.target.value)}
              className="w-24 text-black p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          ))}
          <div className="w-full flex justify-center mt-4">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Predict
            </button>
          </div>
        </form>

        {prediction !== null && (
          <div className="text-center text-xl font-semibold text-green-700">
            Prediction: {prediction === 1 ? "⚠️ Anomaly" : "✅ Normal"}
          </div>
        )}

        {error && <p className="text-center text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}
