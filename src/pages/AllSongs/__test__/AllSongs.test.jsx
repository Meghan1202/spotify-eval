import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AllSongs from '../AllSongs';
import { mockSongs } from '../../../mockdata/mockData';

describe(AllSongs.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <AllSongs
          songs={mockSongs}
          toggleView={jest.fn()}
          patchLike={jest.fn()}
          updateSongs={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
