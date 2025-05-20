# Backend - Flask API

This Flask app serves the anomaly detection model for inference.

Run this command to start flask server (on http://127.0.0.1:5000)
```bash
python app.py
```

Optionally you cand send post request on [http://127.0.0.1:5000/predict](http://127.0.0.1:5000/predict) using tools like Postman or Hopscotch with json body containing 30 features.

Sample body content
```json
{
  "features": [
    460,-2.312226542, 1.951992011, -1.609850732, 3.997905588, -0.522187865, -1.426545319, -2.537387306, 1.391657248, -2.770089277, -2.772272145,3.202033207, -2.899907388, -0.595221881, -4.289253782, 0.38972412, -1.14074718, -2.830055675, -0.016822468, 0.416955705, 0.126910559, 0.517232371, -0.035049369, -0.465211076, 0.320198199, 0.044519167, 0.177839798, 0.261145003, -0.143275875, 0
    ]
}
```