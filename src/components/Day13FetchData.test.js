import { render, screen, waitFor } from '@testing-library/react';
import FetchData from '../FetchData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Test Post' }),
  })
);

test('displays data after API call', async () => {
  render(<FetchData />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText('Test Post')).toBeInTheDocument());
});