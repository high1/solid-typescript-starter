import { screen } from '@testing-library/dom';

test('renders without crashing', () => {
  const app = document.createElement('div');
  app.setAttribute('id', 'app');
  document.body.appendChild(app);
  require('index');
  expect(app).toContainElement(screen.queryByRole('img', { name: /logo/i }));
  //expect(getByRole(app, 'link')).toHaveTextContent('Learn Solid');
});
