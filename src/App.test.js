import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello h1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument();
});
