import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders game component', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Tic Tac Toe/i);
  expect(headerElement).toBeInTheDocument();
});
