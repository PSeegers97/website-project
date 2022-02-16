import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlackInDarkIn from './BlackInDarkIn';

describe('<BlackInDarkIn />', () => {
  test('it should mount', () => {
    render(<BlackInDarkIn />);
    
    const blackInDarkIn = screen.getByTestId('BlackInDarkIn');

    expect(blackInDarkIn).toBeInTheDocument();
  });
});