import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from "./Requests";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // Truncate extra lines in description...
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner-contents">
                <div className='banner-items'>
                    <h1 className="banner-tittle">
                        {movie?.name || movie?.title || movie?.original_name}
                    </h1>
                    <div className='banner-buttons'>
                        <button className='banner-button play-button'>
                            <i className="fas fa-play icon"></i>
                            Play
                        </button>
                        <button className='banner-button'>
                            <i className="fas fa-info-circle icon-size"></i>
                            More Info
                        </button>
                    </div>
                    <h1 className='banner-description'>
                        {truncate(`${movie?.overview}`, 150)}
                    </h1>
                </div>
            </div>

            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner
