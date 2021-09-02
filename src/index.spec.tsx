import * as solid from 'solid-js/web';

const renderMock = (): void => undefined;

test('renders without crashing', async () => {
  const app = document.createElement('div');
  app.setAttribute('id', 'app');
  document.body.append(app);
  const renderSpy = jest.spyOn(solid, 'render').mockImplementationOnce(() => renderMock);
  await import('index');
  expect(renderSpy).toHaveBeenCalledWith(expect.any(Function), app);
  app.remove();
});
