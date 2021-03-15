import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GenreViewPage from '../GenreViewPage';
import { mockGenre } from '../../../mockdata/mockData';

describe(GenreViewPage.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <GenreViewPage
          genreData={mockGenre}
          patchLike={jest.fn()}
          updateSongs={jest.fn()}
          toggleView={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
