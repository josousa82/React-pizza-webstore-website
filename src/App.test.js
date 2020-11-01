import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page with ready in 60 seconds text', () => {
  render(<App />);
  const linkElement = screen.getByText(/READY IN 60 SECONDS/i);
  expect(linkElement).toBeInTheDocument();
});
