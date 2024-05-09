import Header from './index.tsx';
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  test('header properly render', () => {
    render(<Header />);

    screen.debug();

    expect(screen.getByText(/RESTy/)).toBeVisible();
  });
});

