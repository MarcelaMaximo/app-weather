import React from "react";
import './FormattedDate.css';

export default function FormattedDate(props){
  let WeekDays = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"];
  let week =  WeekDays[props.date.getDay()];  
   
  let hours = props.date.getHours();
    if (hours <10) {
      hours = `0${hours}`;
    }

   let minutes = props.date.getMinutes();
     if (minutes <10) {
      minutes = `0${minutes}`;
    }
   let day = [props.date.getDate()];
     let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let month = months[props.date.getMonth()];
   

  return (
    <div className="Date"> 
        {hours}:{minutes} - {day} {month} ({week})
    </div>
    );
}