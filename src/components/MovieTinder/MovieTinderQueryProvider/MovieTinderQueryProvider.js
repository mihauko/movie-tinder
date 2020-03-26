import React from 'react';
import PropTypes from 'prop-types';


const queryData = {
  loading: false,
  error: false,
  data: [
    {
      id: '1and3011',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Inferno',
      summary: 'Lorem ipsum….',
      rating: 5.3
    },
    
    // {
    //   id: '2301abc',
    //   imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
    //   title: 'Star Wars: Episode VII - The Force Awakens',
    //   summary: 'Lorem ipsum….',
    //   rating: 8.2,
    // },
  ],
};

const MovieTinderQueryProvider = ({ children }) => {
  const { data, loading, error } = queryData;
  
  return (
    children(data, loading, error)
  );
};

MovieTinderQueryProvider.propTypes = {

};

export default MovieTinderQueryProvider;