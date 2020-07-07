import React, { useState, useEffect } from 'react';
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    API_URL, 
    API_KEY, 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE 
  } from '../config';
  
// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// custom hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  console.log(state);
  
  if (error) return <div>Something went wrong ...</div>;
  if (!state.movies[0]) return <Spinner />
  
    return (
        <>
        <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}    
            title={state.heroImage.original_title}
            text={state.heroImage.overview}
            />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
    )
}




export default Home;