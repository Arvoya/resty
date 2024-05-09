import Form from './index.tsx';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Form Component', () => {
  test('Form properly renders', () => {
    render(<Form handleApiCall={console.log} />);

    screen.debug(); // this prints the "HTML" in our terminal.

    expect(screen.getByText(/GET/)).toBeVisible();
    expect(screen.getByText(/POST/)).toBeVisible();
    expect(screen.getByText(/PUT/)).toBeVisible();
    expect(screen.getByText(/DELETE/)).toBeVisible();
  });

  test('Calls a function on submit', () => {
    const state = { formData: { method: '', url: '' } };
    const testFunction = (param: { method: string, url: string }) => {
      state.formData = param;
    }

    render(<Form handleApiCall={testFunction} />)
    const postBtn = screen.getByText('GET');
    const urlInput = screen.getByTestId('url-input');
    fireEvent.click(postBtn);
    fireEvent.change(urlInput, { target: { value: 'test' } });
    fireEvent.click(screen.getByText('GO!'));
    expect(state.formData.method).toBe('GET');
    expect(state.formData.url).toBe('test');
  });

});
