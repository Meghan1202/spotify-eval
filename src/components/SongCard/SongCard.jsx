import React from 'react';
import PropTypes from 'prop-types';
import './SongCard.css';
import LikeButton from '../LikeButton/LikeButton';

const SongCard = ({
  name, albumArt, artist, currentState, likes, id, patchLike, updateSongs,
}) => (
  <div className="Card-Container">
    <img className="Image-Container" src={albumArt} alt="poster" />
    <p className="Song-Name">{name}</p>
    <span className="Song-Name">{artist}</span>
    <LikeButton
      currentState={currentState}
      likes={likes}
      id={id}
      patchLike={patchLike}
      updateSongs={updateSongs}
    />
  </div>
);

SongCard.propTypes = {
  name: PropTypes.string.isRequired,
  albumArt: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  currentState: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  patchLike: PropTypes.func.isRequired,
  updateSongs: PropTypes.func.isRequired,
};

export default SongCard;
