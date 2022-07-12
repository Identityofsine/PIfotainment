import React, {useState, createRef, useEffect, useRef} from 'react'
import "./scroller.scss"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function Scroller({text}) {
  const ref = createRef();
  const child = useRef();
  const [x, setX] = useState(0);
  const xRef = useRef(x);
  const [sec, setTime] = useState(30);
  const [startScroll, setScroll] = useState(false);
  const isMoving = useRef(startScroll)
  const [intervalID, setIntervalID] = useState();
  const iirf = useRef(intervalID)
  useEffect(() => {
    console.log("changed!")
    async function getWidth(){
      if(iirf.current){
        clearInterval(iirf.current)
        setIntervalID(NaN)
      }
      setX(0)
      setTime(0)
      await delay(200);
      console.log(child.current)
      if (child.current && child.current.clientWidth < child.current.scrollWidth) {
          console.log("move")  
          setTime(30);
          setScroll(true);
          isMoving.current = true;
          scrollController()
          setIntervalID(setInterval(scrollController, 30 * 1000));
      }
      else {
        setScroll(false);
        isMoving.current = false;
        console.log("Removing : " , iirf.current)
      }
    }
    getWidth();
  },[text, child.current])

  useEffect(() => {
    xRef.current = x
    iirf.current = intervalID
    async function getWidth(){
      await delay(5000);


    }
    getWidth()
  });

  const scrollController = () => {
    console.log("woo woo woo")
    console.log(xRef)
    if(isMoving.current){
      setX(child.current && xRef.current === 0 ? child.current.clientWidth - child.current.scrollWidth : 0) 
    }
  }

  useEffect(() => {
    async function setTimer(){
      await delay(500);
      if (child.current && child.current.clientWidth < child.current.scrollWidth) {
        setX(-child.current.scrollWidth + child.current.clientWidth)
        setScroll(true);
        isMoving.current = true;
      }
      else{
        setScroll(false);
        isMoving.current = false;
      }
      //if(isMoving.current)   
      //scrollController()
    }
    setTimer()
  }, []);


  const style = {
    transform: `translateX(${x}px)`,
    transition: `${sec}s transform`
  }





  return (

    <div ref={ref} className='scroll'>
        {/* {startScroll ?
        React.cloneElement(props.children, {ref:{child},style:{style}}) : React.cloneElement(props.children, {style:{style}}) */}
        <h2 ref={child} style={style}>{text}</h2>


    </div>


  )
}

export default Scroller