import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { daysArr } from "./functions";
import axios from "axios";

const AppContext = React.createContext();

const initialState = {
  city: "",
  currentData: {},
  loading: false,
  error: false,
  forecastData: [],
  forecastError: "",
  days: [],
};

const checkNullObj = (obj) => {
  return( Object.entries(obj).length === 0 && obj.constructor === Object);
};

const AppContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb95ae3e289264d84e4e12753796141a`
      );
      console.log(response.data);
      dispatch({ type: "Fetch_Success", payload: response.data });
    } catch (error) {
      dispatch({ type: "Fetch_Error", payload: error.response.data.message });
    }
  };

  const getForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eb95ae3e289264d84e4e12753796141a`
      );
      dispatch({
        type: "ForecastFetch_Success",
        payload: response.data.list,
        dayPayload: daysArr,
      });
    } catch (error) {
      dispatch({ type: "ForecastData_Error" });
    }
  };

  const searchHandler = (city) => {
    dispatch({ type: "Search", payload: city });
    getData(city);
    getForecastData(city);
  };

  return (
    <AppContext.Provider value={{ searchHandler, state, checkNullObj }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppContainer, useGlobalState };
