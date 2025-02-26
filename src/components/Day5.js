import { useState, useEffect } from 'react';

function Day5() {
  const [weather, setWeather] = useState(null);
  const api = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=zEKl9br1nNqJPnpIvenwGKBwgU1tEJpF';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className="wrapper">
        <h4 className="days">Day 5</h4>
      {weather && weather.timelines && weather.timelines.daily ? (
        <div >
          <h1>Weather Forecast</h1>
          {weather.timelines.daily.map((day, index) => (
            <div key={index}>
              <h2>{new Date(day.time).toLocaleDateString()}</h2>
              <p>Temperature: {day.values.temperatureAvg}°C</p>
              <p>Weather: {day.values.weatherCode}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
}

export default Day5;