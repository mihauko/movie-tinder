import React from 'react';
import PropTypes from 'prop-types';
import AppContext from "../../components/MovieTinder/context";
import MovieTinder from "../../components/MovieTinder";
import MovieTinderQueryProvider from "../../components/MovieTinder/MovieTinderQueryProvider";

const MovieContainer = props => {
  return (
    <MovieTinderQueryProvider>
        {(movieData, loading, error) => {
          const contextElements = {
            movieData,
          };
           if(loading || error || !movieData) return <div>Some problems with data</div>;
          console.log(movieData);
           return (
             <AppContext.Provider value={contextElements}>
               {movieData.map((movie) => (
                 <MovieTinder key={movie.id} movie={movie} />
               ))}
             </AppContext.Provider>
           );
        }}
    </MovieTinderQueryProvider>
  );
};

MovieContainer.propTypes = {

};

export default MovieContainer;