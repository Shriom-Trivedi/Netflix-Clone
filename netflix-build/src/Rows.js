import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Rows.css"

const Rows = ({ title, fetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([]);
    // const [infoCard, setInfoCard] = useState(false);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className='row-posters'>
            {movies.map(
                (movie) => (
                    (isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <>
                        <div className="card">
                            <img
                                className={`row-poster ${isLargeRow && 'row-posterLarge'}`} 
                                key={movie.id}
                                src={`${base_url}${
                                    isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`} 
                                alt={`${movie.name}`} 
                            />
                           
                            <div className='infocard'>
                                <i class="far fa-play-circle"></i>
                            </div>
                            <div className='infocard-details'>
                                <h6>{movie?.name || movie?.title || movie?.original_name}</h6>
                            </div>
                        </div>
                      </>      
                )
                
            )}
            </div>
        </div>
    )
}

export default Rows
