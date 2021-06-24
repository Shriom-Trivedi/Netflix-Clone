import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from "../Requests";
import Row from "../Rows";
import Footer from "../Footer";

const HomeScreen = () => {
    return (
        <div>
            <Nav />
        
            <Banner />

            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow
            />
            <Row 
                title='Trending Now'
                fetchUrl={requests.fetchTrending} 
            />
            <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTopRated} 
            />
            <Row 
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies} 
            />
            <Row 
                title='Comedy Moives'
                fetchUrl={requests.fetchComedyMovies} 
            />
            <Row 
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies} 
            />
            <Row 
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies} 
            />
            <Row 
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries} 
            />

            <Footer />
        </div>
    )
}

export default HomeScreen
