import React from "react";
import './Weather.css';

export default  function Weather() {
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
      <h2 className="day">13:03 - 3 Feb (Thursday)</h2>
        <h1>
          Lisbon, <span className="country">PT</span>{" "}
        </h1>
        
      </div>
      <div className="temperature"> 
        <span className="temp"> 20</span> 
        <span className="unit">°C | °F</span>        
        <div className="img"> <img
            src="http://openweathermap.org/img/wn/10d@2x.png "
            className="emoji"
          />
          </div>
      </div>
        <div className="row mt-3"> 
          <div className="col-2">  </div>
          <div className="col-2">  <strong>Max</strong><div  className="description">9°C</div></div>
          <div className="col-2"> <strong>Min</strong><div className="description">9°C</div></div>
          <div className="col-2"> <strong>Wind</strong><div className="description">3km/h</div></div>
          <div className="col-2"> <strong>Humidity</strong><div className="description">45%</div></div>
          <div className="col-2"> </div>
        </div>
  </div>
  );
}

