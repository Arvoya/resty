import { screen, render, fireEvent } from '@testing-library/react';
import History from './index';

describe('History component', () => {
	test('should display history list, and trigger function when clicked', () => {
		const historyData = [
			{ method: 'GET', url: 'http://api.com' },
			{ method: 'POST', url: 'http://api.com' },
			{ method: 'PUT', url: 'http://api.com' },
			{ method: 'DELETE', url: 'http://api.com' },
		];
		const state = { historyClicked: { method: '', url: '' } };
		const testFunc = (hist: { method: string, url: string }) => {
			state.historyClicked = hist;
		};
		render(<History historyData={historyData} handleClick={testFunc} />);

		screen.debug();
		const btn = screen.getByText(/GET/);
		fireEvent.click(btn);
		expect(state.historyClicked.method).toBe('GET');
	});
});
