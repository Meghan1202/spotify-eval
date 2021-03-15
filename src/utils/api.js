const axios = require('axios');
const { apiBaseURL, token } = require('../Constants/Constant');

const apiInstance = axios.create({
  baseURL: apiBaseURL,
  timeout: 10000,
  headers: { Authorization: `Bearer ${token}` },
});

const getLikesDataForSong = async (id) => {
  const likesResponse = await apiInstance.get(`api/records/${id}/likes`);
  const likesData = await likesResponse.data;
  return likesData.data;
};

const getSongsData = async () => {
  const songsResponse = await apiInstance.get('api/records');
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

const getRecordsBasedOnGenres = (songs) => {
  const genreData = {};
  // const songs = await getSongsData();
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
  const likePatchResponse = await apiInstance.patch(`api/records/${id}/likes`, {
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
  apiInstance,
};
