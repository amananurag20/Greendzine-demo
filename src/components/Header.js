import React from 'react'
import helper from "../images/helper-logo.png"
import moptro from "../images/moptro logo2.PNG"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex flex-row-reverse justify-between'>
        <img className="helper-logo w-16 " src={helper} alt='img'></img>
        <Link to={"/"}><div className='text-green-700 ml-5 font-bold mt-4 right-0'>Logout</div></Link>
      </div>
      <div className='moptro-logo'>
        <img className="mx-40 mb-8 w-40 moptro" src={moptro} alt='logo'></img>
      </div>
    </div>
  )
}

export default Header