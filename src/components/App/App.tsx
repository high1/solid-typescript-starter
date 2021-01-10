import { Component, createSignal, onCleanup } from 'solid-js';

import logo from 'assets/logo.svg';
import wordmark from 'assets/wordmark.svg';
import styles from 'components/App/App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return (
    <>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <a
          class={styles.link}
          href="https://github.com/ryansolid/solid#documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wordmark} class={styles.wordmark} alt="wordmark" />
        </a>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        {/* <a class={styles.link} href="https://solidjs.com" target="_blank" rel="noopener noreferrer">
          Learn Solid
        </a> */}
      </header>
    </>
  );
};

export default App;
