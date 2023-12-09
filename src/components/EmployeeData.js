import React from 'react'
import Header from './Header'
import btn from "../images/btn-logo.PNG"
import data from '../utils/data';
import home from "../images/home2-logo.PNG"
import user from "../images/user2-logo.PNG"
import { Link } from 'react-router-dom';
import { useState } from "react";

const EmployeeData = () => {
    const [searchText, setSearchText] = useState("");
    const [listOfEmployee, setListOfEmployee] = useState(data);
    const [filteredEmployee, setFilteredEmployee] = useState(data);

    return (
        <div>
            <Header />

            <div className='search  rounded-full'>
            </div>
            <input type='text' placeholder='Search with name'
                className='search-bar text-5xl font-bold text-white rounded-full bg-transparent'
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }} >

            </input>
            <button className='btn' onClick={
                () => {

                    // searchText
                    console.log(searchText);

                    const filteredEmployee = listOfEmployee.filter((d) =>
                        d.Name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilteredEmployee(filteredEmployee);
                }
            }><img src={btn} alt='btn' ></img>   </button>


            <div className='mt-32'>
                {filteredEmployee.map((d, index) => (
                    
                    <div key={ index } className={`whole ${index % 2 === 0 ? '-mx-2' : 'mx-6'}`}>
                        <div className='bg-container absolute mb-6  ml-10 p-3 w-80 rounded-2xl'></div>
                    < div  className = 'container mb-6  ml-10 p-3 w-80 rounded-2xl ' >
                        
                        <div className='flex'  >
                            <p className='text-white mx-2 my-4'> EMP ID :</p> 
                            <p className='text-white mx-2 my-4 font-bold'>{d.EMPID}</p>
                            <div className='h-5 w-5 ml-40 mt-4 text-white rounded-full border-solid border-black z-40'>{index+1}</div>
                            </div>
                            
                      <div className='flex'>
                      <p className='text-white mx-2 my-4'> Name : </p>
                      <p className='text-white mx-2 my-4 font-bold'>{d.Name} </p>
                      </div>
                      
                      <div className='flex'>
                      <p className='text-white mx-2 my-4'> DOB : </p>
                      <p className='text-orange-700 mx-2 my-4 font-bold'>{d.DOB}</p>
                      </div>

                      <div className='flex'>
                      <p className='text-white mx-2 my-4'> Role : </p>
                      <p className='text-green-700 mx-2 my-4 font-bold'>{d.Role}</p>
                      </div>
                    </div>
                    </div>
             ))}

        </div>
        {/* footer */ }

        <div className=' foot-container fixed bottom-0 left-0 w-full'>
        <div className='footer ml-0 rounded-full'></div>
        </div>
        
        <div className='user fixed rounded-full ml-36 '>  
        </div>
        <Link to="/browse"><div className='home2-logo fixed'>
        <img src={home} alt='img'></img>
        </div></Link>

        <div className='user2-iogo  fixed z-100'>
        <img src={user} alt='img'></img>
        </div>
        
        
    </div >
  )
}

export default EmployeeData;