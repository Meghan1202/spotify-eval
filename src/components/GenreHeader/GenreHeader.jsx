import React from 'react';
import './GenreHeader.css';
import PropTypes from 'prop-types';

const GenreHeader = ({ Genre }) => (
  <div className="Genre-Header-Container">
    <img className="Genre-Image" src={`./assets/genre-${Genre}.png`} alt="genre" />
    <div className="Genre-Indicator">{Genre}</div>
  </div>
);

GenreHeader.propTypes = {
  Genre: PropTypes.string.isRequired,
};

export default GenreHeader;
