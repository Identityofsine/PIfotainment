import logo from './logo.svg';
import './App.scss';
import NowPlaying from './widgets/nowplaying/nowplaying';
import { useState } from 'react';
import WeatherWidget from './widgets/weather/weather';
import MainBlock from './widgets/mainBlock/mainblock';
import Music from './elements/music/music';
import ReactAudioPlayer from 'react-audio-player';
var ShairportReader = window.require('shairport-sync-reader');
const reader = new ShairportReader({ path: '/tmp/shairport-sync-metadata' });


//add env for src
function corner() {
  return(
    <>
    <div className='sin'>
    |
    </div>
    <div className='cos'>
    |
    </div>
    </>
  );
}


function App() {

  return (
    <div className="App">
      <div className='corners'>
        <div className='topleft'>
          {corner()}
        </div>
        <div className='bottomright'>
          {corner()}
        </div>
      </div>

      <ReactAudioPlayer src="assets/rainnoises.mp3" autoPlay={true} loop={true} volume={.15}/>      
      <MainBlock/>
      <NowPlaying ></NowPlaying>
    </div>
  );
}

export default App;
