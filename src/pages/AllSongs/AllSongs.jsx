import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SongCard from '../../components/SongCard/SongCard';

const AllSongs = ({ songs, toggleView }) => (
  <div className="All-Song-Container">
    <h2>all songs</h2>
    <Link
      to="/genre"
      onClick={() => {
        toggleView();
      }}
    >
      toggleView
    </Link>
    <div className="Records-Container">
      {
        songs.map((song) => (
          <SongCard
            key={song.id}
            name={song.name}
            albumArt={song.albumArtUrl}
            artist={song.artist.name}
          />
        ))
      }
    </div>
  </div>
);

AllSongs.propTypes = {
  songs: PropTypes.arrayOf(Object).isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default AllSongs;
