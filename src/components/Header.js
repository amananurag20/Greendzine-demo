import React from 'react'
import helper from "../images/helper-logo.png"
import moptro from "../images/moptro logo2.PNG"

const Header = () => {
  return (
    <div>
      <div className='flex flex-row-reverse'>
        <img className="helper-logo w-16 " src={helper} alt='img'></img>
      </div>
      <div className='moptro-logo'>
        <img className="mx-40 mb-8 w-40 moptro" src={moptro} alt='logo'></img>
      </div>
    </div>
  )
}

export default Header