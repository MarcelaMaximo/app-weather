import React from "react";
import './WeatherForecast.css';
import { Card, CardColumns} from 'react-bootstrap';
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
  function handleResponse (response) {
    console.log(response.data);
  }

  let apiKey = "20d1aee4a985cfd10c02f2da340417b7";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast"> 
      <div ClassName="row">
        <div ClassName="col">
          <CardColumns>
            <Card>
              <Card.Body>
                <Card.Text>
                  <div ClassName="day"> 
                    Tomorrow
                  </div>
                  <WeatherIcon code="01d" size={50}/>
                  <div Classname="temperature"> 
                  <span className="WeatherForecast-temperature-max">19°</span>
                  <span className="WeatherForecast-temperature-min">10°</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </div>
      </div>
    </div>)
}
