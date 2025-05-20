# Smart Factory Anomaly Detection

This project uses machine learning to detect anomalies in sensor data from a smart factory. It consists of:

- A trained anomaly detection model using **Random Forest**
- A web frontend built with **Next.js + Tailwind CSS + TypeScript**
- A backend API using **Flask**

# Getting Started
1. Run the following command to install required python libraries and create virtual environment.
    ```bash 
    pip install -r requirements.txt
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```
2. Train the model (or use the provided `joblib` files) - import the training datasets in the task repository before training.
3. Start the Flask backend: navigate to backend directory and run app.py file to sart flask server.
4. Start the frontend: navigate to frontend directory and start next.js server.
5. Go to [http://localhost:3000](http://localhost:3000) and input 30 features to predict.