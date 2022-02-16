import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Tsp from "./components/Tsp/Tsp";
import BlackInDarkIn from "./components/BlackInDarkIn/BlackInDarkIn";
import CallOnMouseChanges from "./components/CallOnMouseChanges/CallOnMouseChanges";

function App() {
  return (
    <div className="App">
      <CallOnMouseChanges></CallOnMouseChanges>
    </div>
  );
}

export default App;
