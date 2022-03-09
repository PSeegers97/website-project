import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlaBlaBlaKat from './BlaBlaBlaKat';

describe('<BlaBlaBlaKat />', () => {
  test('it should mount', () => {
    render(<BlaBlaBlaKat />);
    
    const blaBlaBlaKat = screen.getByTestId('BlaBlaBlaKat');

    expect(blaBlaBlaKat).toBeInTheDocument();
  });
});