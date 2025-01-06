import React, { useEffect, useState } from "react";
import axios from "/VS Code Projects/Web Cloning/netflix-app/src/axios"
import { API_KEY, imgUrl } from "../../Constants/constants";

function Header() {
  const [movie, setMovie] = useState()
  const [randomNumber, setRandom] = useState(0)

  useEffect(() => {
    // Generate a random number between 0 and 19
    const randomIndex = Math.floor(Math.random() * 20); // Generates a random number between 0 and 19
    // console.log("Random index generated: " + randomIndex); //this it checking random num
    setRandom(randomIndex);
  }, []); // This useEffect runs only once when the component mounts

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[randomNumber])
    })
  }, [randomNumber]);

  return (
    <header
      className="bg-cover bg-center lg:h-screen h-[30rem] text-white relative "
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`
      }}
    >
      {/* Movie Details */}
      <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 md:px-12 pb-8 ">
        {/* Movie Title */}
        <h1 className="movie-title text-2xl sm:text-3xl md:text-5xl font-bold pb-3">
          {movie ? movie.name || movie.title : "Loading"}
        </h1>

        {/* Buttons */}
        <div className="banner_buttons flex flex-wrap gap-4">
          <button className="Play-button text-white outline-none border-none font-semibold rounded-md py-2 px-6 sm:px-8 bg-gray-800 bg-opacity-50 cursor-pointer hover:text-black hover:bg-gray-200">
            Play
          </button>
          <button className="My-List-button text-white outline-none border-none font-semibold rounded-md py-2 px-6 sm:px-8 bg-gray-800 bg-opacity-50 cursor-pointer hover:text-black hover:bg-gray-200">
            My List
          </button>
        </div>

        {/* Movie Description */}
        <h1
          className={` ${movie?.overview && movie.overview.length <= 400
            ? "movie-description text-sm sm:text-base md:text-lg leading-6 pt-4 max-w-full sm:max-w-[25rem]"
            : " movie-description text-sm sm:text-base md:text-lg leading-6 pt-4 max-w-full sm:max-w-[90rem]"
            }`}
        >
          {movie?.overview ? movie.overview : "Loading..."}
        </h1>

      </div>

      {/* Fade Effect */}
      <div className="img-fade-section lg:h-screen h-[30rem] sm:h-[30rem] bg-gradient-to-b from-transparent to-[#1b1a1a] via-[#2c2a2a6d]"></div>
    </header>
  );
}

export default Header;
