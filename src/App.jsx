import React, { useState } from "react";
import Forecast from "./Forecast";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  return (
    <>
    <h2 className = 'heading'>Weather App</h2>
      <Form />
      <Weather />
      <Forecast />
    </>
  );
}

export default App;
