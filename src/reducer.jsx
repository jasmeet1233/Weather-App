export const reducer = (state, action) => {
  if (action.type === "Search") {
    return { ...state, city: action.payload, loading: true, currentData: {}};
  }
  if (action.type === "Fetch_Success") {
    return { ...state, currentData: action.payload, error: "", loading: false };
  }
  if (action.type === "Fetch_Error") {
    return { ...state, currentData: {}, error: action.payload, loading: false };
  }
  if (action.type === "ForecastFetch_Success") {
    return {
      ...state,
      days: action.dayPayload,
      forecastData: action.payload,
      forecastError: false
    };
  }
  if (action.type === "ForecastData_Error") {
    return { ...state,forecastError: true, forecastData: []};
  }
};
