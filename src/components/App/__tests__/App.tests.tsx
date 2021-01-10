import { render } from 'solid-js/dom';
import { queryByRole } from '@testing-library/dom';

import App from 'components/App';
describe('App component', () => {
  test('logo should be in the document', () => {
    const container = document.createElement('div');
    render(() => <App />, container);
    expect(container).toContainElement(queryByRole(container, 'img', { name: /logo/i }));
  });
  test('wordmark should be in the document', () => {
    const container = document.createElement('div');
    render(() => <App />, container);
    expect(container).toContainElement(queryByRole(container, 'img', { name: /wordmark/i }));
  });
});
