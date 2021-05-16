import React from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo (props){
  return (
    <div className="WeatherInfo"> 
        < FormattedDate date={props.data.date} />
        <h1>
          {props.data.city}, <span className="country">{props.data.country}</span>{" "}
        </h1>
        <div className="temperature"> 
          <span className="temp"> {Math.round(props.data.temperature)}</span> 
          <span className="unit">°C | °F</span>
          <br />       
        <WeatherIcon code= {props.data.icon}/>   
        </div>
        <div className="row mt-3"> 
          <div className="col-2">  </div>
          <div className="col-2">  <strong>Max</strong><div  className="description">{Math.round(props.data.max)}°C</div></div>
          <div className="col-2"> <strong>Min</strong><div className="description">{Math.round(props.data.min)}°C</div></div>
          <div className="col-2"> <strong>Wind</strong><div className="description">{Math.round(props.data.wind)}km/h</div></div>
          <div className="col-2"> <strong>Humidity</strong><div className="description">{Math.round(props.data.humidity)}%</div></div>
          <div className="col-2"> </div>
        </div>
    </div>)
}