import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headingElement = screen.getByText(/Santiago Salazar Pavajeau/i);
  expect(headingElement).toBeInTheDocument();
});
