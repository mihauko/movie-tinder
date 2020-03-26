import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { StyledButtonsGroup } from './styles';


const MovieButtons = ({ handleAcceptClick, handleRejectClick, id }) => {
  return (
    <StyledButtonsGroup fullWidth color="secondary" aria-label="outlined secondary button group">
      <Button  color="primary" variant="contained" onClick={() => handleAcceptClick(id)}>Accept</Button>
      <Button color="secondary" variant="contained" onClick={() => handleRejectClick(id)}>Reject</Button>
    </StyledButtonsGroup>
  );
};

MovieButtons.propTypes = {

};

export default MovieButtons;