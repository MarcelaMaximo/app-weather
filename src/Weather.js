import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from './WeatherInfo';


export default  function Weather(props) {
  const [WeatherData, setWeatherData]= useState({ ready: false});
  const [city, setCity]= useState(props.defaultCity);
  function handleResponse (response) {
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

  function search () {
    const apiKey = "20d1aee4a985cfd10c02f2da340417b7";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
    
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange (event){
    setCity(event.target.value);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <div className="city">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9"> 
                  <input 
                    type="search" 
                    placeholder="Enter a city..." 
                    className="form-control" 
                    autoFocus="on"
                    onChange={handleCityChange}/>
                </div>
                <div className="col-3"> 
                <input 
                  type="submit"
                  value="Search" 
                  className="btn btn-outline-primary w-100"/>        
                </div>
              </div>
            </form>
          <WeatherInfo data={WeatherData}/>
        </div>    
      </div>
    );
  } else {
    search();
    
  
    return "Loading..."
}
  }

   

