const mockLike = { like: false, count: 1 };

const mockSongs = [{
  id: '1',
  name: 'song_name',
  genre: { id: '1', name: 'genre_name' },
  artist: { id: '1', name: 'abc' },
  albumArtUrl: 'abc.com',
  publishedAt: '',
  likes: 1,
  isLikedAlready: true,
}];

module.exports = { mockLike, mockSongs };
