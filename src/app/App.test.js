import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import api from '../utils/api';
import { mockGenre, mockSongs } from '../mockdata/mockData';

describe(App.name, () => {
  beforeEach(() => {
    jest.spyOn(api, 'getSongsData').mockResolvedValue(mockSongs);
    jest.spyOn(api, 'getRecordsBasedOnGenres').mockResolvedValue(mockGenre);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('renders learn react link', () => {
    render(<App />);
  });
});
