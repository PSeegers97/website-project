import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MouseHover from './MouseHover';

describe('<MouseHover />', () => {
  test('it should mount', () => {
    render(<MouseHover />);
    
    const mouseHover = screen.getByTestId('MouseHover');

    expect(mouseHover).toBeInTheDocument();
  });
});