import {
  render, waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import api from '../../utils/api';
import { mockGenre, mockSongs } from '../../mockdata/mockData';

describe(App.name, () => {
  beforeEach(() => {
    jest.spyOn(api, 'getSongsData').mockResolvedValueOnce(mockSongs).mockResolvedValueOnce(null);
    jest.spyOn(api, 'getRecordsBasedOnGenres').mockResolvedValue(mockGenre).mockResolvedValueOnce(null);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should match the snapshot', async () => {
    const { container } = await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    expect(container).toMatchSnapshot();
  });
  test('should route to GenreViewPage', async () => {
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
  });
});
