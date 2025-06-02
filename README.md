# Crisis Connect

## Project Description

Crisis Connect is a disaster management platform designed to connect communities with resources and volunteers during emergencies.

## Features

- **Incident Reporting:** Report emergencies and incidents in your area
- **Resource Finder:** Locate nearby shelters, medical centers, and food distribution points
- **Disaster Alerts:** Receive real-time alerts about ongoing and potential disasters
- **AI Insights:** Access AI-driven disaster predictions and social media sentiment analysis
- **Donation Platform:** Support affected communities through donations
- **Weather Information:** Get up-to-date weather forecasts and conditions

## How to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AthiqaZulequa/crisis-connect-india-hub
   cd crisis-connect-india-hub
   ```

2. **Install dependencies:**
    ```sh
   npm install
   ```

3. **Start the development server (default port is 8080):**
   ```sh
   npm run dev
   ```

4. **_To use a different port (e.g., 3001):_**
   ```sh
   npm run dev -- --port 3001
   ```

5. Open your browser and navigate to:
- Default: [http://localhost:8080](http://localhost:8080)
- If you used a different port: [http://localhost:3001](http://localhost:3001)

## Troubleshooting

- **If you see “localhost refused to connect”:**
- Make sure your terminal running `npm run dev` is open and the server is running.
- If you have antivirus/firewall software, ensure it allows Node.js/Vite.
- Try a different port if you suspect a port conflict:
```sh
npm run dev -- --port 3002
```
- Try using `http://127.0.0.1:PORT/` instead of `http://localhost:PORT/`.

## Technologies Used

- React + TypeScript
- Tailwind CSS
- shadcn/ui Components
- Recharts for data visualization

## Future Plans

- Integrate multilingual support
- Expand coverage to other disaster-prone regions globally
- Implement real-time communication features
- Develop mobile applications for wider accessibility


