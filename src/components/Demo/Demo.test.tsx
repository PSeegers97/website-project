import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Demo from './Demo';

describe('<Demo />', () => {
  test('it should mount', () => {
    render(<Demo />);
    
    const demo = screen.getByTestId('Demo');

    expect(demo).toBeInTheDocument();
  });
});