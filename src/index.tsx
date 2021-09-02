import { render } from 'solid-js/web';

import App from 'components/App';
import 'index.css';

if (__MODE__ === 'production') {
  // required for babel env preset
  require('core-js/stable');
  require('regenerator-runtime');
}

const root = document.getElementById('app');
if (root) render(() => <App />, root);
