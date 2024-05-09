import Footer from './index.tsx';
import { render, screen } from '@testing-library/react';

describe('Footer Component', () => {
  test('footer properly render', () => {
    render(<Footer />);

    screen.debug();
    expect(screen.getByText(/© 2018/)).toBeVisible();
  });
});
