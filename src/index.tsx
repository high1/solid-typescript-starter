import { render } from 'solid-js/dom';

import App from 'components/App';
import 'index.css';

if (__MODE__ === 'production') {
  // required for babel env preset
  console.log(__MODE__);
  require('core-js/stable');
  require('regenerator-runtime');
}

const root = document.getElementById('app');
if (root) {
  const dispose = render(() => <App />, root);
  module?.hot?.accept();
  module?.hot?.dispose(() => dispose());
}
