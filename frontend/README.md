# Frontend – Anomaly Detector UI

This is the frontend of the Smart Factory Anomaly Detection system. Built using:

- [Next.js](https://nextjs.org/) with App Router and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling


## Getting Started

### 1. Install Dependencies
```bash
npm install
```
### 2. Start Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### 3. Launching Web App
Open your browser at: [http://localhost:3000](http://localhost:3000)

### 4. Features
- Enter 30 numerical sensor readings
- Sends a POST request to the Flask backend (http://localhost:5000/predict)

- Displays prediction:

    ✅ Normal
    ⚠️ Anomaly