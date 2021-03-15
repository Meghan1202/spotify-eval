import React from 'react';
import PropTypes from 'prop-types';
import './LikeButton.css';

const LikeButton = ({
  currentState, likes, id, patchLike, updateSongs,
}) => (
  <div className="Like-Button-Container">
    <input
      type="image"
      className="Heart-Button"
      src={`./assets/${currentState ? 'red' : 'gray'}-heart.svg`}
      alt="Like"
      onClick={
      () => {
        patchLike(id, currentState);
        updateSongs(id, !currentState);
      }
    }
    />
    {/* <img
      className="Heart-Button"
      src="./assets/red-heart.svg"
      alt="Heart"
    /> */}
    <div className="centered">{likes}</div>
  </div>
);

LikeButton.propTypes = {
  currentState: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  patchLike: PropTypes.func.isRequired,
  updateSongs: PropTypes.func.isRequired,
};

export default LikeButton;
