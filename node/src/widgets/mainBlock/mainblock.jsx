import React from 'react'
import { useEffect, useState } from 'react'
import WeatherWidget from '../weather/weather'
import { format } from 'date-fns';
import DashedLine from '../../elements/dashedline/dashedline';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import "./mainblock.scss"

function MainBlock() {
    const [currentTime, setcurrentTime] = useState(new Date())
    useEffect(() => {
        setInterval(() => setcurrentTime(new Date()), 1000);
    } ,[])


  return (
    <div className="widget weather">
        <div className='time '>
            <div className='row glow'>
            <h2>{format(currentTime, 'kk:mm')}</h2>
            <span>{format(currentTime, 'ss')}</span>
            </div>
            <p>{format(currentTime, 'EEEE MMMM do, yyyy')}</p>
        </div>
        <div className='weatherBlock'>
            <WeatherWidget/>
            <DashedLine/>
        <div className='nnf'>
            <AiOutlineInfoCircle/>
            <h2>No New Notifications</h2>
        </div>
        </div>
    </div>
  )
}

export default MainBlock