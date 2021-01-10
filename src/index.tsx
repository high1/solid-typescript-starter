import { render } from 'solid-js/dom';

import App from 'components/App';
import 'index.css';

const root = document.getElementById('app');
if (root) {
  const dispose = render(() => <App />, root);
  module?.hot?.accept();
  module?.hot?.dispose(() => dispose());
}
