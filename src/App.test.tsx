import {render, screen} from '@testing-library/react';
import App from './App';

test('renders h3 element', () => {
  render(<App />);
  const h3Element = screen.getByText(/hi there!/i);
  expect(h3Element).toBeInTheDocument();
});
