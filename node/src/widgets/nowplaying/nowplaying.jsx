import Scroller from '../../elements/scroller/scroller';
import React, {useEffect, useState} from 'react'
import "./nowplaying.scss"
import "../widget.scss"
var ShairportReader = window.require('shairport-sync-reader');

const randomstring = require("randomstring");

var reader = new ShairportReader({ path: '/tmp/shairport-sync-metadata' });
setInterval(() => {reader = new ShairportReader({ path: '/tmp/shairport-sync-metadata' })}, 10 * 1000 * 60)

function NowPlaying() {
  const [imageBinary, setImageBinary] = useState("")
  const [songTitle, setSongTitle] = useState("Shairport-sync isn't on (probably)...".repeat(3))
  const [album, setAlbum] = useState("Jayden Ortiz : The Story")
  const [artist, setArtist] = useState("Kevin Erdogan")
  const [progress, setProgress] = useState()
  const setImageShit = (binary) => {
    setImageBinary(binary)

  }
  
  useEffect(() => {
    reader.addListener("PICT", setImageShit)
    reader.addListener("meta", (meta) => {
      //ADD METADATA HERE, meta.????
      //https://www.npmjs.com/package/shairport-sync-reader all the events are here
      //"minm" - song title
      //"asar" - song artist
      //"asal" - song album
      setSongTitle(meta.minm)
      setAlbum(meta.asal)
      setArtist(meta.asar)
      console.log(meta.minm)
    })
    setInterval(() => {
      reader.addListener("PICT", setImageShit)
      reader.addListener("meta", (meta) => {
        //ADD METADATA HERE, meta.????
        //https://www.npmjs.com/package/shairport-sync-reader all the events are here
        //"minm" - song title
        //"asar" - song artist
        //"asal" - song album
        setSongTitle(meta.minm)
        setAlbum(meta.asal)
        setArtist(meta.asar)
        console.log(meta.minm)
      })
    }, 1 * 1000 *60); // THIS IS FOR THE REFRESH OF SHAIRSYNC-PORT
    //TODO:ADD A PAUSE, RESUME, STOP LISTENER
    
    reader.addListener("prgr", (data) => {
      //PROGRESS LISTENER
      console.log(data.current)
    })
  }, []) 
  //<h1>{album !== "" ? album : ""}</h1>
  const mimeType = 'image/png'; // e.g., image/png
  return (
    <div className='widget nowplaying'>
        <div className='album'>
            <img src={imageBinary ? `data:${mimeType};base64,${Buffer.from(imageBinary).toString("base64")}`: "example.jpeg"}></img>
            
        </div>
        <div className='trackinfo'>
        <Scroller text={songTitle !== "" ? songTitle : "No Music Playing!"}>
        </Scroller>
        {
        // <div className='test' onClick={() => setSongTitle(randomstring.generate(Math.random() * 100))}></div>
        }
        
          {/*<progress id="track" value={124/170 * 100} max="100"> </progress> 
            <span>2:04 / 2:49</span>
          */}
          <p>{album !== ""  ? album : "..."}</p>
          <h2 className='artist'>{artist !== "" ? artist : "No Artist"}</h2>
        </div>

    </div>
  )
}

export default NowPlaying