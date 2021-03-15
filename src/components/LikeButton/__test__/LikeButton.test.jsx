import React from 'react';
import { render } from '@testing-library/react';
import LikeButton from '../LikeButton';

describe(LikeButton.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<LikeButton
      currentState
      likes={1}
      id="abc"
      patchLike={jest.fn()}
      updateSongs={jest.fn()}
    />);
    expect(container).toMatchSnapshot();
  });
});
