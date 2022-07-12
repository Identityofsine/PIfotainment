//WIDGET FOR WEATHER AND TIME
import React, { useState, useEffect } from 'react';
import "./weather.scss"
import sayings from './sayings';
import Forecast from './forecastIcon/forecast';
import DashedLine from '../../elements/dashedline/dashedline';
import { useRef,createRef } from 'react';
import SolidLine from '../../elements/solidline/solidline';
const parse = require('html-react-parser');
var potrace = require('potrace');



const apiKEY = "5570bf62e90f4f1d9f101436201912"
const celsius = true
const zipcode = 11729
const icon = createRef()
//LATER ON PLEASE PUT THESE IN .ENV

function WeatherWidget() {

  const [weatherJSON, setWeatherJSON] = useState();

    function getWeather(){
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKEY}&q=${zipcode}&days=10`
      fetch(url)
      .then(res => res.json())
      .then((result) => {
        setWeatherJSON(result)
        potrace.trace(`https:${result.current.condition.icon}`, function(err, svg) {
          if (err) throw err;
          icon.current = parse("" + svg);
          console.log(svg)
        });
      })
    }

    




    useEffect(() => {
      getWeather();
      setInterval(() => getWeather(), 1000 * 60);
    }, []);
//<img src={`https:${weatherJSON.current.condition.icon}`}></img>
  return (
    <div>
            {/* {<DashedLine/>} */}
            {weatherJSON?.current ?
            <>
            
              <div className='forecast'>
              <div className='row limit'>
                <div className='svgcontainer'>
                  {icon.current}
                </div>
              <h2 className='degrees'>{celsius ? weatherJSON.current.temp_c + '\u00B0\C': weatherJSON.current.temp_f + '\u00B0\F'}</h2>
                <h2 className="weathertext">{weatherJSON.current.condition.text } "{weatherJSON.current.is_day === 1 ? "Day" : "Night"}"</h2>
                </div>

              <SolidLine/>

              <div className='row '>
              {/* weatherJSON.current.condition.code */}
                <h3>{sayings("" + weatherJSON.current.condition.code, weatherJSON.current.is_day === 1 ? true : false)}</h3>
                </div>
              </div>

              </>
            :
            <h2>
              Look outside if you need a forecast
            </h2>
            }
    </div>
  );
}

export default WeatherWidget;
