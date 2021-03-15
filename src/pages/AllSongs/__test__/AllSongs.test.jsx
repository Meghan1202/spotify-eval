import React from 'react';
import { render } from '@testing-library/react';
import AllSongs from '../AllSongs';

describe(AllSongs.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<AllSongs />);
    expect(container).toMatchSnapshot();
  });
});
