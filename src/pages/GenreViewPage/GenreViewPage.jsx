import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GenreHeader from '../../components/GenreHeader/GenreHeader';
import SongCard from '../../components/SongCard/SongCard';
import './GenreViewPage.css';

const GenreViewPage = ({
  genreData, patchLike, updateSongs, toggleView,
}) => (
  <div className="Genre-Page">
    <h2>Genre</h2>
    <Link
      to="/allSongs"
      onClick={() => {
        toggleView();
      }}
    >
      toggleView
    </Link>
    {
            Object.keys(genreData).map((genre) => (
              <div>
                <GenreHeader Genre={genre} />
                <div className="Genre-Container">
                  {
                    genreData[genre].map((song) => (
                      <SongCard
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
            ))
        }
  </div>
);

GenreViewPage.propTypes = {
  genreData: PropTypes.objectOf(Object).isRequired,
  patchLike: PropTypes.func.isRequired,
  updateSongs: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default GenreViewPage;
