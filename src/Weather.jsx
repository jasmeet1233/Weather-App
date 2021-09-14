import React from "react";
import { useGlobalState } from "./context";
import { Spinner } from "@chakra-ui/react";

console.log(new Date())
const Weather = () => {
  const { state, checkNullObj } = useGlobalState();
  const { error, city, currentData, loading } = state;

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return (
      <div className = 'spinner'>
        <Spinner color="red.500" size="xl" />
      </div>
    );
  }

  if (!checkNullObj(currentData)) {
    const { main, sys, weather } = currentData;
    const { temp, temp_max, temp_min, humidity } = main;
    const { country } = sys;
    const mainWeather = weather[0].main;
    const iconCode = weather[0].icon;
    const iconLink = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
      <div className="weather-container">
        <h2>
          {city}, {country}
        </h2>
        <div className="temperature-icon">
          <h3 className="temperature">
            {parseFloat(temp - 273.15).toFixed(2)}
            <span>&#176;</span> C
          </h3>
          <img src={iconLink} alt="condition Image" />
        </div>
        <h3 className="weather-status">{mainWeather}</h3>
        <div className="humidityMaxMin-container">
          <p>Humidity: {humidity}</p>
          <div className = 'MaxMin-container'>
            <p >
              Max Temp: {parseFloat(temp_max - 273.15).toFixed(2)}
              <span>&#176;</span> C
            </p>
            <p>
              Min Temp: {parseFloat(temp_min - 273.15).toFixed(2)}
              <span>&#176;</span> C
            </p>
          </div>
        </div>
        <hr className = 'line' />
      </div>
    );
  }

  return <></>
};

export default Weather;
