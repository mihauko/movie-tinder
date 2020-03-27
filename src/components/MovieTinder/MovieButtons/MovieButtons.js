import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { buttonActionTypes } from '../../../settings';
import { StyledButtonsGroup } from './styles';


const MovieButtons = ({ handleClick }) => (
  <StyledButtonsGroup fullWidth color="secondary" aria-label="outlined secondary button group">
    <Button color="primary" variant="contained" onClick={() => handleClick(buttonActionTypes.ACCEPT)}>
      Accept
    </Button>
    <Button color="secondary" variant="contained" onClick={() => handleClick(buttonActionTypes.REJECT)}>
      Reject
    </Button>
  </StyledButtonsGroup>
);

MovieButtons.propTypes = {
  handleClick: PropTypes.func,
};

export default MovieButtons;
