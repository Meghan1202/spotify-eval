import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SongCard from '../../components/SongCard/SongCard';
import './AllSongs.css';

const AllSongs = ({
  songs, toggleView, patchLike, updateSongs,
}) => (
  <div className="All-Song-Container">
    <div className="Page-Header">
      <h1>all songs</h1>
      <Link
        to="/genre"
        onClick={() => {
          toggleView();
        }}
      >
        <img src="./assets/icon-genre.svg" alt="Toggle View" />
      </Link>
    </div>
    <div className="Records-Container">
      {
        songs.map((song, index) => (
          <SongCard
            theme={index % 2}
            key={song.id}
            name={song.name}
            albumArt={song.albumArtUrl}
            artist={song.artist.name}
            currentState={song.isLikedAlready}
            id={song.id}
            likes={song.likes}
            patchLike={patchLike}
            updateSongs={updateSongs}
          />
        ))
      }
    </div>
  </div>
);

AllSongs.propTypes = {
  songs: PropTypes.arrayOf(Object).isRequired,
  toggleView: PropTypes.func.isRequired,
  patchLike: PropTypes.func.isRequired,
  updateSongs: PropTypes.func.isRequired,
};

export default AllSongs;
