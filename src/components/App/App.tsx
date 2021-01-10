import { Component, createSignal, onCleanup } from 'solid-js';
import clsx from 'clsx';

import logo from 'assets/logo.svg';
import wordmark from 'assets/wordmark.svg';
import styles from 'components/App/App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return (
    <>
      <header
        class={clsx(
          styles.header,
          'min-h-screen flex flex-col justify-center items-center text-center'
        )}
      >
        <img src={logo} class={clsx(styles.logo, 'pointer-events-none mb-4')} alt="logo" />
        <a
          class={styles.link}
          href="https://github.com/ryansolid/solid#documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wordmark} class={clsx(styles.wordmark, 'my-4')} alt="wordmark" />
        </a>
        <p class="my-4">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p class="my-4">
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
