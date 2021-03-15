import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import SongCard from '../components/SongCard/SongCard';
import api from '../utils/api';

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(async () => {
    const songsData = await api.getSongsData();
    setSongs(songsData);
  }, []);
  return (
    <div className="App">
      <NavBar />
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
}

export default App;
