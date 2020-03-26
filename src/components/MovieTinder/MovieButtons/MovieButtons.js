import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { StyledButtonsGroup } from './styles';


const MovieButtons = ({ filteredMovie, updateMovie }) => {
  const handleAcceptClick = async (id) => {
    try {
      const response = await axios.put(`http://127.0.0.1:3001/recommendations/${id}/accept`, {
        ...filteredMovie,
        isAccepted: true,
      });
      updateMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectClick = async (id) => {
    try {
      const response = await axios.put(`http://127.0.0.1:3001/recommendations/${id}/accept`, {
        ...filteredMovie,
        isAccepted: false,
      });
      updateMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledButtonsGroup fullWidth color="secondary" aria-label="outlined secondary button group">
      <Button color="primary" variant="contained" onClick={() => handleAcceptClick(filteredMovie.id)}>Accept</Button>
      <Button color="secondary" variant="contained" onClick={() => handleRejectClick(filteredMovie.id)}>Reject</Button>
    </StyledButtonsGroup>
  );
};

MovieButtons.propTypes = {

};

export default MovieButtons;
