import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CallOnMouseChanges from './CallOnMouseChanges';

describe('<CallOnMouseChanges />', () => {
  test('it should mount', () => {
    render(<CallOnMouseChanges />);
    
    const callOnMouseChanges = screen.getByTestId('CallOnMouseChanges');

    expect(callOnMouseChanges).toBeInTheDocument();
  });
});