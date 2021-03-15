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
    <div className="Genre-Page-Header">
      <h1>genres</h1>
      <Link
        to="/allSongs"
        onClick={() => {
          toggleView();
        }}
      >
        <img data-testid="Toggle-View" src="./assets/icon-grid.svg" alt="Toggle View" />
      </Link>
    </div>
    {
            Object.keys(genreData).map((genre) => (
              <React.Fragment key={genre}>
                <GenreHeader key={genre} Genre={genre} />
                <div className="Genre-Container">
                  {
                    genreData[genre].map((song, index) => (
                      <SongCard
                        key={song.id}
                        name={song.name}
                        albumArt={song.albumArtUrl}
                        artist={song.artist.name}
                        currentState={song.isLikedAlready}
                        id={song.id}
                        likes={song.likes}
                        patchLike={patchLike}
                        updateSongs={updateSongs}
                        theme={index % 2}
                      />
                    ))
                    }
                </div>
              </React.Fragment>
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
