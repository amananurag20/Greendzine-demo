import React from 'react'
import helper from "../images/helper-logo.png"
import moptro from "../images/moptro logo2.PNG"
import home from "../images/home-logo.PNG"
import user from "../images/user-icon.PNG"
import Header from './Header'
import { Link } from 'react-router-dom'

const Browse = () => {
  return (
    <div className='absolute'>
      <Header/>
      <div className=' dashboard-container'>
        <div className='dashboard  my-5 w-3/12 mx-auto absolute rounded-xl  z-30'>
        </div>


        <div className='employee text-white text-center  py-2 left-0 right-0 mx-auto w-80  px-8 rounded-full'>Employee Productivity Dashboard</div>
        <div className='flex flex-nowrap mx-3 px-3 mt-3 pt-3'>
          <div className='text-white mx-12'>Productivity on Monday</div>
          <div className='text-green-800 ml-8 font-bold'>4%</div>
        </div>
        <div className='bg-green-800 w-2 h-4 ml-14 rounded-full monday'></div>

        {/* tuesday */}
 <div className='flex flex-nowrap mx-3 px-3 mt-3 pt-3 mb-1'>
          <div className='text-white mx-12'>Productivity on Tuesday</div>
          <div className='text-green-800 ml-8 font-bold'>92%</div>
        </div>
        <div className='bg-green-800 w-44 h-4 ml-14 rounded-full tuesday'></div>

        {/* wednesday */}
        <div className='flex flex-nowrap mx-3 px-3 mt-3 pt-3 mb-1'>
          <div className='text-white mx-12'>Productivity on Wednesday</div>
          <div className='text-green-800 ml-1 font-bold'>122%</div>
        </div>
        <div className='bg-green-800 w-60 h-4 ml-14 rounded-full wednesday'></div>

        {/* thurday */}
        <div className='flex flex-nowrap mx-3 px-3 mt-3 pt-3 mb-1'>
          <div className='text-white mx-12'>Productivity on Thursday</div>
          <div className='text-green-800 ml-6 font-bold'>93%</div>
        </div>
        <div className='bg-green-800 w-48 h-4 ml-14 rounded-full thursday'></div>

        {/* friday */}
        <div className='flex flex-nowrap mx-3 px-3 mt-3 pt-3 mb-1'>
          <div className='text-white mx-12'>Productivity on Friday</div>
          <div className='text-green-800 ml-12 font-bold'>89%</div>
        </div>
        <div className='bg-green-800 w-40 h-4 ml-14 rounded-full friday'></div>

        {/* saturday */}
        <div className='flex flex-nowrap mx-3 px-3 mt-3 pt-3 mb-1'>
          <div className='text-white mx-12'>Productivity on Saturday</div>
          <div className='text-green-800 ml-7 font-bold'>98%</div>
        </div>
        <div className='bg-green-800 w-52 h-4 ml-14 rounded-full friday'></div>
      </div>
       
       <Link to={"/"}><div className='text-green-700 font-bold mt-24 ml-80'>Logout</div></Link>
       {/* footer */}
        <div className='footer absolute  ml-0 rounded-full'></div>
        <div className='home rounded-full absolute'>  
        </div>
        <div className='home-icon'>
        <img src={home} alt='img'></img>
        </div>

        <Link to="/employee"><div className='user-icon'>
        <img src={user} alt='img'></img>
        </div> </Link>
        

    </div>
  )
}

export default Browse