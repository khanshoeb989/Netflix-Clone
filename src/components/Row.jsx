
import {  useEffect } from 'react'
import axios from 'axios'
import React, { useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movie from './Movie';

const Row = ({title,fetchURL,rowId}) => {
    const [movies,setmovies] = useState([])
    

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setmovies(response.data.results)
        })
    },[fetchURL])
    
    const slideLeft = ()=>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft=slider.scrollLeft-400;
    }

    const slideRight = ()=>{
        var slider = document.getElementById('slider'+ rowId)
        slider.scrollLeft=slider.scrollLeft+400;
    }



  return (
    <>
    <h2 className=' text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className=' relative items-center flex group'>
        <MdChevronLeft
        onClick={slideLeft }
         className=' bg-white left-0 rounded-full absolute opacity-50 scroll-smooth hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider'+ rowId} className=' w-full h-full scroll-smooth overflow-x-scroll whitespace-nowrap scrollbar-hide'>
            {movies.map((item, id)=>(
                <Movie key={id} item={item} />
            ))}

        </div>
        <MdChevronRight
        onClick={slideRight}
         className=' bg-white right-0 rounded-full absolute opacity-50 scroll-smooth hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

    </div>
    </>
  )
}

export default Row