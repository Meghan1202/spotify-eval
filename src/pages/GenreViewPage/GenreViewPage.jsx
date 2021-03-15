import React from 'react';
import PropTypes from 'prop-types';
import GenreHeader from '../../components/GenreHeader/GenreHeader';
import SongCard from '../../components/SongCard/SongCard';
import './GenreViewPage.css';

const GenreViewPage = ({ genreData }) => (
  <div className="Genre-Page">
    <h2>Genre</h2>
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
  genreData: PropTypes.arrayOf(Object).isRequired,
};

export default GenreViewPage;
