import React from 'react';
import PropTypes from 'prop-types';
import './SongCard.css';
import LikeButton from '../LikeButton/LikeButton';

const SongCard = ({
  name, albumArt, artist, currentState, likes, id, patchLike, updateSongs, theme,
}) => (
  <div className={`Card-Container-${theme}`}>
    <img className="Image-Container" src={albumArt} alt="poster" />
    <div className="Song-Name">{name}</div>
    <div className="Card-Footer">
      <span className="Artist-Name">{artist}</span>
      <LikeButton
        currentState={currentState}
        likes={likes}
        id={id}
        patchLike={patchLike}
        updateSongs={updateSongs}
      />
    </div>
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
  theme: PropTypes.number.isRequired,
};

export default SongCard;
