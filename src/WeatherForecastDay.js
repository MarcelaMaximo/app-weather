import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Card, CardColumns } from 'react-bootstrap';

export default function WeatherForecastDay (props){

  function MaxTemp (){
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function MinTemp (){
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon","Tue", "Wed","Thu","Fri","Sat"];
    
    return days[day];
  }

    return(
      <div className="WeatherForecastDay">
        <CardColumns> 
          <Card>
            <Card.Text>
            <div className="day"> {day()} </div>
            <WeatherIcon code={props.data.weather[0].icon} size={50}/>
            <div className="temperature"> 
            <span className="temperature-max">{MaxTemp()}</span>
            <span className="temperature-min">{MinTemp()}</span>
            </div>
            </Card.Text>
          </Card>
        </CardColumns>
      </div> 
    );
  }