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
  const [genreData, setGenreData] = useState([]);

  const getGenre = async () => {
    const genres = await api.getRecordsBasedOnGenres();
    setGenreData(genres);
  };

  const getSongs = async () => {
    const songsData = await api.getSongsData();
    setSongs(songsData);
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/allSongs">
          <AllSongs
            songs={songs}
            toggleView={getGenre}
          />

        </Route>
        <Route path="/genre"><GenreViewPage genreData={genreData} /></Route>
        <Route path="/"><LandingPage getSongs={getSongs} /></Route>
      </Switch>
    </div>
  );
}

export default App;
