import './App.css';
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import SongCard from '../components/SongCard/SongCard';
// import api from '../utils/api';

function App() {
  // const getSongs = async () => {
  //   const songs = await api.getSongsData();
  //   console.log(songs);
  //   return songs;
  // };

  return (
    <div className="App">
      <NavBar />
      <SongCard key={1} name="aaa" albumArt="aaa" />
    </div>
  );
}

export default App;
