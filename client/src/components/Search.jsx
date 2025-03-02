import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowCircleLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';

const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isSearchPage,setIsSearchPage]= useState(false)
    const [isMobile] = useMobile()

    useEffect(() =>{
        const isSearch = location.pathname === '/search'
        setIsSearchPage(isSearch)
    },[location])
    
    const redirectToSearchPage=() => {
        navigate("/search")
    }
  return (
    <div className='w-full  min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border p-1 overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-cyan-800'>
        <div>
            

            {
                (isMobile && isSearchPage)?
                (
                        <Link to={"/"}className='flex  items-center h-full p-3 group-focus-within:text-cyan-800 '>
                        <FaArrowCircleLeft  size={22}/>
        
                        </Link>
                ):
                (
                    <button className='flex  items-center h-full p-3 group-focus-within:text-cyan-800'>
                        <FaSearch size={22}/>
        
                    </button>
                  )
            }
           
        </div>
        <div className='w-full h-full'>
            {
                !isSearchPage ?(
                    <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Search "milk"',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Search "bread"',
                        1000,
                        'Search "sugar"',
                        1000,
                        'Search "panir"',
                        1000,
                        'Search "chocolate"',
                        1000,
                        'Search "rice"',
                        1000,
                        'Search "egg"',
                        1000,
                        'Search "chips"',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                   
                    repeat={Infinity}
                    
            />
            </div>
                ):(
                    <div className='w-full h-full'>
                        <input type="text" placeholder='Search for your utils'
                        autoFocus
                        className='bg-transparent w-full h-full outline-0'/>
                    </div>
                )
            }
        </div>
        
       
        
    </div>
  )
}

export default Search