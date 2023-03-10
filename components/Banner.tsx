import Image from "next/legacy/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"
import {FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from "@heroicons/react/24/outline"

interface Props {
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}:Props) {

  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[64vh] lg:pb-12 lg:justify-end">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout = "fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl ">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-shadow-md md:text-lg md:max-w-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

      <div className="flex gap-x-4">
        <button className="buttonBanner bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>Play</button>
        <button className="buttonBanner bg-[gray]/70">
          More Info<InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/></button>
      </div>
    </div>
  )
}

export default Banner