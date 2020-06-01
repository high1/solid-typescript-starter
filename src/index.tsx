import { render, MountableElement } from 'solid-js/dom';

import App from 'components/App';

render(() => <App />, document.getElementById('app') as MountableElement);
