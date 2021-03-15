import React from 'react';
import { render } from '@testing-library/react';
import LikeButton from '../LikeButton';

describe(LikeButton.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<LikeButton />);
    expect(container).toMatchSnapshot();
  });
});
