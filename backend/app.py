from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

model = joblib.load('final_model.joblib')
scaler = joblib.load('final_scaler.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json.get('features')
    if not data or len(data) != 30:
        return jsonify({'error': 'Expected 30 features'}), 400

    features = np.array(data).reshape(1, -1)
    scaled = scaler.transform(features)
    prediction = model.predict(scaled)[0]
    return jsonify({'prediction': int(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
