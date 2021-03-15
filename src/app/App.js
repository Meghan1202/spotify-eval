import './App.css';
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import SongCard from '../components/SongCard/SongCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SongCard />
    </div>
  );
}

export default App;
