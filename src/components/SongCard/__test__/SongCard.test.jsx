import React from 'react';
import { render } from '@testing-library/react';
import SongCard from '../SongCard';

describe(SongCard.name, () => {
  test('Should match the snapshot', () => {
    const { container } = render(<SongCard
      name="songe_Name"
      albumArt="Url"
      artist="Artist_Name"
      currentState
      likes={1}
      id="abc"
      patchLike={jest.fn()}
      updateSongs={jest.fn()}
      theme={1}
    />);
    expect(container).toMatchSnapshot();
  });
});
