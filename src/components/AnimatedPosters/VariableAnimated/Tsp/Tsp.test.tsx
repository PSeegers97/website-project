import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tsp from './Tsp';

describe('<Tsp />', () => {
  test('it should mount', () => {
    render(<Tsp />);
    
    const tsp = screen.getByTestId('Tsp');

    expect(tsp).toBeInTheDocument();
  });
});