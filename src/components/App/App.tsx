import { Component, createSignal, onCleanup } from 'solid-js';

import logo from 'assets/logo.svg';
import wordmark from 'assets/wordmark.svg';

const App: Component = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return (
    <>
      <header class="bg-[#282c34] min-h-screen flex flex-col justify-center items-center text-center text-[whitesmoke]">
        <img
          src={logo}
          class="h-[40vmin] pointer-events-none mb-4 motion-safe:animate-scale"
          alt="logo"
        />
        <a
          class="text-[#4483c1] p-4"
          href="https://github.com/ryansolid/solid#documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wordmark} class="h-[7vmin] my-4" alt="wordmark" />
        </a>
        <p class="my-4">
          Edit <code class="bg-[#fff3] rounded-md p-2">src/App.tsx</code> and save to reload.
        </p>
        <p class="my-4">
          Page has been open for <code class="bg-[#fff3] rounded-md p-2">{count()}</code> seconds.
        </p>
        {/* <a class={styles.link} href="https://solidjs.com" target="_blank" rel="noopener noreferrer">
          Learn Solid
        </a> */}
      </header>
    </>
  );
};

export default App;
