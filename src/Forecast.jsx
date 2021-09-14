import React from "react";
import { useGlobalState } from "./context";
import { days2Display, dataArr } from "./functions";

const Forecast = () => {
  const { state, checkNullObj } = useGlobalState();
  const { currentData, forecastData, days, forecastError } = state;

  if (checkNullObj(currentData)) return <></>;
  if (forecastError) return <></>;

  if (forecastData.length !== 0) {
    const forecastWeather = dataArr(forecastData, days2Display);
    const { main, sys, weather } = currentData;
    const { temp: currentTemp } = main;
    return (
      <div className="forecast-container">
        {forecastWeather.map((itemObj, i) => {
          const { temp } = itemObj.main;
          const iconCode = itemObj.weather[0].icon;
          const iconLink = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
          return (
            <div key={i} className = 'forecast-day'>
              <div>{days[i]}</div>

              <img src={iconLink} alt="" />
              <div>
                {i === 0
                  ? parseFloat(currentTemp - 273.15).toFixed(2)
                  : parseFloat(temp - 273.15).toFixed(2)}
                <span>&#176;</span> C
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return <></>;
};

export default Forecast;
