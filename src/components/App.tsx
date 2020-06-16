import { Component } from 'solid-js';

import logo from 'assets/logo.svg';
import styles from 'components/App.css';

const App: Component = () => (
  <>
    <header class={styles.AppHeader}>
      <img src={logo} class={styles.AppLogo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        class={styles.AppLink}
        href="https://solidjs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>
    </header>
  </>
);

export default App;
