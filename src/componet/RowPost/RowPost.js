import axios from "/VS Code Projects/Web Cloning/netflix-app/src/axios"
import React, { useEffect, useRef, useState, } from "react";
import { API_KEY, imgUrl } from "../../Constants/constants";
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovie] = useState([]);
  const contentRef = useRef(null);
  const [urlID, setUrlId] = useState("")

  useEffect(() => {
    // this axios is my setup
    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    }).catch(err => { alert("Network Error") })

  });
  // this is the function to handle the scroll event
  useEffect(() => {
    const content = contentRef.current;
    const handleWheel = (event) => {
      event.preventDefault();
      content.scrollLeft += event.deltaY; // Convert vertical scroll into horizontal scroll
    };

    if (content) {
      content.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (content) {
        content.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Youtube id set width and height
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  const handleMovie = (id) => {
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {

      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log("array empty")
      }
    })

  };
  return (
    <div className="mt-8 text-white">
      <h2 className="text-xl font-bold ml-5">{props.title}</h2>
      <div
        ref={contentRef}
        className="flex overflow-x-auto gap-4 px-5 py-4 scrollbar-hide scroll-smooth "
      >
        {movies.map((obj) => (
          <img onClick={() => handleMovie(obj.id)}
            className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${props.isSmall ? "h-36 mr-2" : "h-56 mr-2"
              }`}
            src={`${imgUrl + obj.backdrop_path}`}
            alt=""
            key={obj.id} // Always include a unique `key` when mapping over an array
          />
        ))}

      </div>
      {urlID && < Youtube opts={opts} videoId={urlID.key} />}
    </div>
  );
}

export default RowPost;
