import React from 'react';
import PropTypes from 'prop-types';
import './SongCard.css';
import LikeButton from '../LikeButton/LikeButton';

const SongCard = ({ name, albumArt }) => (
  <div className="Card-Container">
    <img className="Image-Container" src={albumArt} alt="poster" />
    <p className="Song-Name">{name}</p>
    <span>Artist</span>
    <LikeButton />
  </div>
);

SongCard.propTypes = {
  name: PropTypes.string.isRequired,
  albumArt: PropTypes.string.isRequired,
};
export default SongCard;
