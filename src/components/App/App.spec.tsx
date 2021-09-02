import { render, screen } from 'solid-testing-library';

import App from 'components/App';
describe('App component', () => {
  test('logo should be in the document', () => {
    render(() => <App />);
    expect(screen.queryByRole('img', { name: /logo/i })).toBeInTheDocument();
  });

  test('wordmark should be in the document', () => {
    render(() => <App />);
    expect(screen.queryByRole('img', { name: /wordmark/i })).toBeInTheDocument();
  });
});
