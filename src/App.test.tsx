// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Param, Model } from './types';

test('renders learn react link', () => {
  const params: Param[] = []; // Заглушка для params
  const model: Model = { paramValues: [] }; // Заглушка для model
  render(<App params={params} model={model} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
