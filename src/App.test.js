import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FlippR landing page sections', () => {
  render(<App />);
  expect(screen.getByText(/the agentic reseller/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/flippR home/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /instantly appraise an item, instantly list an item/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /from scan to appraisal/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /instant listings on ebay/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /your financial dashboard/i })).toBeInTheDocument();
});
