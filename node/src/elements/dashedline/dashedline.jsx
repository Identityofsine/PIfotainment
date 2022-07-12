import React from 'react'
import "./dashedline.scss"
function DashedLine() {
  const hypen = "-".repeat(500)
  return (
    <div className='dashed'>
      {hypen}        
    </div>
  )
}

export default DashedLine