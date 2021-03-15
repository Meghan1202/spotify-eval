import axios from 'axios';
import { apiInstance, getLikesDataForSong } from './api';
import { mockLike } from '../mockdata/mockData';

describe('getLikesDataForSong', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should display the likes for a song', async () => {
    const spyOnLike = jest.spyOn(apiInstance, 'get').mockResolvedValue({ data: { data: mockLike } });
    const response = await getLikesDataForSong('1');
    expect(response).toBe(mockLike);
    expect(spyOnLike).toBeCalledWith('api/records/1/likes');
  });
});
