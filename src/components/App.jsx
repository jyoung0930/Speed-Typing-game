import { useState, useEffect, useRef } from "react";

export default function App() {
  const [wordsTyped, setWordsTyped] = useState("");

  function collectWords(e) {
    const { value } = e.target;
    setWordsTyped(value);
  }

  console.log(wordsTyped);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <form>
        <textarea value={wordsTyped} onChange={collectWords}></textarea>
        <h2>Time</h2>
        <button>Start</button>
        <h2>Word Count</h2>
      </form>
    </div>
  );
}
