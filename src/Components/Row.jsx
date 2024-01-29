import React, { useEffect, useState } from 'react'
import '../Style/Row.css'
import axiosFile from '../axios'

function Row({ title, fetchURL, isLargerRow }) {
  const [movies, setMovies] = useState([])

  const base_Url = "https://image.tmdb.org/t/p/original/"
  useEffect(() => {
    async function fetchData() {
      const request = await axiosFile.get(fetchURL)
      setMovies(request.data.results)
      return request;
    }
    fetchData()
  }, [fetchURL])

  console.log(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => ( 
          (isLargerRow && movie.backdrop_path) || (!isLargerRow && movie.poster_path)) &&
          (
            <img
            className={`row_poster ${isLargerRow && "row_posterLarge" }` }
            key={movie.id}
            src={`${base_Url}${isLargerRow ? movie.poster_path : movie.backdrop_path }`} 
            alt={movie.name} />
          )
          
        )}
      </div>
    </div>
  )
}

export default Row