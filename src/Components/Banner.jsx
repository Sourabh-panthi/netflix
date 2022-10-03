import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Banner = () => {
  const [Movies, setMovies] = useState([]);

  function truncate(str, length) {
    return str?.slice(0, length) + " ...";
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(Movies);
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${Movies.backdrop_path})`,
      }}
      //   className={` bg-[url("https://image.tmdb.org/t/p/original${Movies.backdrop_path}")] -mt-8 relative h-[500px] bg-center object-contain text-white`}
      className={`  -mt-8 relative h-[500px] bg-auto object-contain  text-white`}
    >
      <div className="m-8 pt-48 h-48">
        <h1 className=" pb-1 font-bold text-4xl ">
          {Movies?.title || Movies?.name || Movies?.original_name}
        </h1>
        <div>
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className="w-[45rem] pt-4 text-sm max-w-sm h-20 ">
          {truncate(`${Movies?.overview}`, 150)}
        </h1>
      </div>
      <div className="h-28 bg-gradient-to-t translate-y-[165px] from-black" />
    </div>
  );
};

export default Banner;
