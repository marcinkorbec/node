import { render, screen } from '@testing-library/react';
import Participants from './NumberList';

test('renders learn react link', () => {
  render(<Participants />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
