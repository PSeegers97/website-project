import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SwimCity from './SwimCity';

describe('<SwimCity />', () => {
  test('it should mount', () => {
    render(<SwimCity />);
    
    const swimCity = screen.getByTestId('SwimCity');

    expect(swimCity).toBeInTheDocument();
  });
});