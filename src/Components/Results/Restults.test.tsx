import Results from './index.tsx';
import { screen, render } from '@testing-library/react';

describe('Results Component', () => {
  test('should display results', () => {
    const results = {
      headers: {
        banana: 'banana'
      },
      results: [
        {
          name: 'banana',
          url: 'https://banana'
        }
      ]
    }

    render(<Results data={results} />);

    screen.debug();

    expect(screen.getByText(/banana/)).toBeVisible();
    expect(screen.getByText(/https:\/\/banana/)).toBeVisible();
  });
});
