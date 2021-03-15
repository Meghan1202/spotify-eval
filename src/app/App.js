import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import api from '../utils/api';
import AllSongs from '../pages/AllSongs/AllSongs';
import LandingPage from '../pages/LandingPage/LandingPage';
import GenreViewPage from '../pages/GenreViewPage/GenreViewPage';

function App() {
  const [songs, setSongs] = useState([]);
  const [genreData, setGenreData] = useState({});

  const updateSongs = (id, currentState) => {
    let genre = '';
    const songsModified = songs.map((song) => {
      if (song.id === id) {
        genre = song.genre.name;
        return {
          ...song,
          likes: currentState ? song.likes + 1 : song.likes - 1,
          isLikedAlready: currentState,
        };
      }
      return song;
    });
    const genreDataModified = { ...genreData };
    genreDataModified[genre] = genreDataModified[genre].map((song) => {
      if (song.id === id) {
        genre = song.genre.name;
        return {
          ...song,
          likes: currentState ? song.likes + 1 : song.likes - 1,
          isLikedAlready: currentState,
        };
      }
      return song;
    });
    setSongs(songsModified);
    setGenreData(genreDataModified);
  };

  const getGenre = async () => {
    const genres = await api.getRecordsBasedOnGenres(songs);
    setGenreData(genres);
  };

  const getSongs = async () => {
    const songsData = await api.getSongsData();
    setSongs(songsData);
  };
  return (
    <div className="App">
      <NavBar />
      {
        songs.length ? (
          <Route path="/allSongs">
            <AllSongs
              songs={songs}
              toggleView={getGenre}
              patchLike={api.patchSongLikeData}
              updateSongs={updateSongs}
            />
          </Route>
        ) : <Route path="/"><LandingPage getSongs={getSongs} /></Route>
      }
      <Switch>
        {/* <Route path="/allSongs">
          <AllSongs
            songs={songs}
            toggleView={getGenre}
            patchLike={api.patchSongLikeData}
            updateSongs={updateSongs}
          />
        </Route> */}
        <Route path="/genre"><GenreViewPage genreData={genreData} patchLike={api.patchSongLikeData} updateSongs={updateSongs} toggleView={getSongs} /></Route>
        {/* <Route path="/"><LandingPage getSongs={getSongs} /></Route> */}
      </Switch>
    </div>
  );
}

export default App;
