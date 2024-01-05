import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import  { useState } from 'react'


const Movie = ({item}) => {
    const [like,setlike] = useState(false)
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                    <div className=' absolute top-0 w-full h-full left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className=' whitespace-normal text-xl md:text-sm font-bold flex justify-center items-center text-center h-full'>{item?.title}</p>
                        {like?<FaHeart className=' absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className=' absolute top-4 left-4 text-gray-300'/>}

                    </div>
                </div>
  )
}

export default Movie