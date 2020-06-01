import { render, MountableElement } from 'solid-js/dom';
import { queryByRole } from '@testing-library/dom';

import App from 'components/App';

test('link and image should exist', () => {
  const container = document.createElement('div');
  render(() => <App />, container as MountableElement);
  expect(queryByRole(container, 'link')).toHaveTextContent('Learn Solid');
  expect(container).toContainElement(queryByRole(container, 'img', { name: /logo/i }));
});
