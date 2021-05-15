import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import FormattedDate from './FormattedDate';

export default  function Weather(props) {
  const [WeatherData, setWeatherData]= useState({ ready: false});
  function handleResponse (response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      date: new Date (response.data.dt * 1000), 
      temperature: response.data.main.temp,
      wind: response.data.wind.speed, 
      city: response.data.name,
      country: response.data.sys.country,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      icon: "http://openweathermap.org/img/wn/10d@2x.png"

    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <div className="city">
          <form>
        <div className="row">
          <div className="col-9"> 
              <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                />
          </div>
          <div className="col-3"> 
          <input type="submit" value="Search" className="btn btn-outline-primary w-100"/>        
          </div>
        </div>
      </form>
        < FormattedDate date={WeatherData.date} />
          <h1>
            {WeatherData.city}, <span className="country">{WeatherData.country}</span>{" "}
          </h1>
          
        </div>
        <div className="temperature"> 
          <span className="temp"> {Math.round(WeatherData.temperature)}</span> 
          <span className="unit">°C | °F</span>        
          <div className="img"> <img
              src={WeatherData.icon}
              className="emoji"
              alt="cloud"
            />
            </div>
        </div>
          <div className="row mt-3"> 
            <div className="col-2">  </div>
            <div className="col-2">  <strong>Max</strong><div  className="description">{Math.round(WeatherData.max)}°C</div></div>
            <div className="col-2"> <strong>Min</strong><div className="description">{Math.round(WeatherData.min)}°C</div></div>
            <div className="col-2"> <strong>Wind</strong><div className="description">{Math.round(WeatherData.wind)}km/h</div></div>
            <div className="col-2"> <strong>Humidity</strong><div className="description">{Math.round(WeatherData.humidity)}%</div></div>
            <div className="col-2"> </div>
          </div>
      </div>
    );
  } else {
    const apiKey = "fb4290424ee04cbcc7671069110859c2";
    let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);  
  
    return "Loading..."
}
  }

   

