import React from 'react';
import { render } from '@testing-library/react';
import SongCard from '../SongCard';

describe(SongCard.name, () => {
  test('Should match the snapshot', () => {
    const { container } = render(<SongCard />);
    expect(container).toMatchSnapshot();
  });
});
