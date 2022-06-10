import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders header', () => {
	render(<App />);
	const titleElement = screen.getByText(/RepoRunner/i);
	expect(titleElement).toBeInTheDocument();
});
