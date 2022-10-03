import axios from "../axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [Movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function getMovies() {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    }
    getMovies();
  }, [fetchUrl]);
  console.log(Movies);
  return (
    <div className="text-white font-semibold ml-3">
      <h2>{title}</h2>
      <div className="flex overflow-hidden overflow-x-scroll p-5">
        {Movies?.map(
          (movie) =>
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path && (
              <img
                className="max-h-24 object-contain mr-5 w-[100%] transition-transform ease-in duration-300 hover:scale-110 opacity-100  "
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Row;
