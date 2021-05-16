import React, {useState} from "react";

export default function WeatherTemperature(props){

  const [unit, setUnit] = useState('celsius');

  function ShowF (event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowC (event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
    <div className="WeatherTemperature"> 
      <span className="temp">{Math.round(props.celsius)}</span> 
      <span className="unit">°C | 
        <a href="/" onClick={ShowF}>°F</a>
      </span>
    </div>
  );
  
  } else {
    let fahrenheit = (props.celsius *9)/5+32;
   return (
    <div className="WeatherTemperature"> 
      <span className="temp">{Math.round(fahrenheit)}</span> 
      <span className="unit"> <a href="/" onClick={ShowC}>°C</a> | °F
      </span>
    </div>);
  }
  
}