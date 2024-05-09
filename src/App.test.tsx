import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App.tsx';

const server = setupServer(
  http.get('/*', () => {
    return HttpResponse.json({ results: [{ name: 'banana', url: 'banana.com' }] })
  }),
  http.post('/*', () => {
    return HttpResponse.json({ greeting: 'You have done POST' })
  }),
  http.put('/*', () => {
    return HttpResponse.json({ greeting: 'You have done PUT' })
  }),
  http.delete('/*', () => {
    return HttpResponse.json({ greeting: 'You have done DELETE' })
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App Component', () => {
  test('receives requestParams from Form component and updates State and renders Results', async () => {
    render(<App />);

    const getBtn = screen.getByText('GET');
    const urlInput = screen.getByTestId('url-input');
    fireEvent.change(urlInput, { target: { value: 'test/' } });
    fireEvent.click(getBtn);
    fireEvent.click(screen.getByText('GO!'));
    screen.debug();
    const result = await screen.findByText(/banana.com/);

    expect(result).toBeVisible();
  })
});
