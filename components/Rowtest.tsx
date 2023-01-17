import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import React, { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnailtest from './Thumbnailtest'

interface Props{
    title : String,
    movies: Movie[]
}

function Rowtest({title, movies}:Props) {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction : String) =>{
        setIsMoved(true)
        if(rowRef.current){
            const {scrollLeft, clientWidth} = rowRef.current
            
            const scrollTo = 
                direction === "left"
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth
            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }
    }

  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
        <h2 className="w-56 cursor-pointer text-sm font-semibold
        text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
        </h2>
        <div className="group relative">
            <ChevronLeftIcon className={`absolute h-9 w-9 top-0 bottom-0 left-2
            opacity-150 z-40 m-auto cursor-pointer hover:scale-110 transition
            opacity-0 group-hover:opacity-100 ${!isMoved && "hidden"}`
            }
            onClick={()=>{handleClick('left')}}/>
            <div className='flex space-x-3 overflow-x-scroll scrollbar-hide
                ' ref={rowRef}>
                {movies.map((movies)=>(
                    <Thumbnailtest key={movies.id} movie={movies} />
                ))}
            </div>
            <ChevronRightIcon className={`absolute h-9 w-9 top-0 bottom-0 right-2
            opacity-150 z-40 m-auto cursor-pointer hover:scale-110 transition
            opacity-0 group-hover:opacity-100`}
            onClick={()=>{handleClick('right')}}
            />
        </div>
    </div>
  )
}

export default Rowtest