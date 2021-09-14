import React, { useState } from "react";
import Forecast from "./Forecast";
import Form from "./Form";
import Weather from "./Weather";

function App() {
  return (
    <>
      <Form />
      <Weather />
      <Forecast />
    </>
  );
}

export default App;
