import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /full-stack developer/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument();
});
