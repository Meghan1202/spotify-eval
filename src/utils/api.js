const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxN2I2NjI4ZC0xZWJkLTRjMGItOGU3ZS0yZTFlYTgwYzc3MzEiLCJuYW1lIjoiTWVnaGFuYSIsInJvbGUiOjAsInN1YmplY3QiOiJUZWNoIFVuaXYgMjAyMSIsImVhc3Rlcl9lZ2ciOiJHb29kIGx1Y2shIiwiYXVkIjoibXVzaWNyZWNvcmRzLnRlY2h1bml2LmNvbSIsIm5iZiI6MTYxNTc4NDQzNCwiZXhwIjoxNjE4Mzc2NDM0LCJpYXQiOjE2MTU3ODQ0MzQsImlzcyI6Ik11c2ljIFJlY29yZHMifQ.zndapgDdsHymhHBydkTyQcrA6rmhSEJtoJ3PtGQVoQs';
const apiBaseURL = 'https://musicrecordsapi.azurewebsites.net';

const apiInstance = axios.create({
  baseURL: apiBaseURL,
  timeout: 10000,
  headers: { Authorization: `Bearer ${token}` },
});

const getLikesDataForSong = async (id) => {
  const likesResponse = await apiInstance.get(`/api/records/${id}/likes`);
  const likesData = await likesResponse.data;
  return likesData.data;
};

const getSongsData = async () => {
  const songsResponse = await apiInstance.get('/api/records');
  const songsData = await Promise.all(songsResponse.data.data.map(async (song) => {
    const likesDataForRecord = await getLikesDataForSong(song.id);
    return {
      ...song,
      likes: likesDataForRecord.count,
      isLikedAlready: likesDataForRecord.like,
    };
  }));
  return songsData;
};

const getRecordsBasedOnGenres = async () => {
  const genreData = {};
  const songs = await getSongsData();
  songs.forEach((song) => {
    if (genreData[song.genre.name]) {
      genreData[song.genre.name] = [...genreData[song.genre.name], song];
    } else {
      genreData[song.genre.name] = [song];
    }
  });
  return genreData;
};

const patchSongLikeData = async (id, currentState) => {
  const likePatchResponse = await apiInstance.patch(`/api/records/${id}/likes`, {
    like: !currentState,
  });
  const likePatchData = await likePatchResponse.data;
  return likePatchData;
};

module.exports = {
  getSongsData,
  getLikesDataForSong,
  patchSongLikeData,
  getRecordsBasedOnGenres,
};
