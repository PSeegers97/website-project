import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TAnimation from './TAnimation';

describe('<TAnimation />', () => {
  test('it should mount', () => {
    render(<TAnimation />);
    
    const TAnimation = screen.getByTestId('TAnimation');

    expect(TAnimation).toBeInTheDocument();
  });
});