import React from 'react'
import './forecast.scss'
const parse = require('html-react-parser');
var potrace = require('potrace');
function Forecast({low, high, weather, icon, date}) {


  const dayOfWeekName = date?.toLocaleString ? date.toLocaleString(
    'default', {weekday: 'long'} 
  ) : "N/A";

  const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
  const convertToSVG = (url) => {
    var svgtext = ""
    console.log("https:"+url)
    potrace.trace("https:"+url, function(err, svg) {
      if (err) throw err;
      svgtext = svg;
    });
    return svgtext
  }
  return (
    <div className={`forecastItem ${datesAreOnSameDay(date, new Date()) ? "same" : ""}`}>
        <img src={parse(convertToSVG(icon))}></img>
        <div className='row'>
        <div className='temp'>
        <h2>{`${Math.round(low)}\u00B0\ `}</h2>
        <p>L</p>
        </div>
        <h1>|</h1>
        <div className='temp'>
          <h2>{`${Math.round(high)}\u00B0\ `}</h2>
          <p>HI</p>
        </div>
        </div>
        <div className='text'>
            <span>{weather}</span>
        </div>
        <div className='day'>
          <span>{dayOfWeekName}</span>
        </div>
    </div>
  )
}

export default Forecast