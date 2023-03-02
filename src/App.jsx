import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0);
  const buttonRef = useRef();
  const oldCountRef = useRef();

  // Não re renderiza o componente
  useEffect(() => {
    // setNumber((prevNumber) => prevNumber + 10);
    numberRef.current = Math.random();
  });

  // Referência para elementos de DOM
  useEffect(() => {
    // console.log(buttonRef.current.click());
    buttonRef.current.click();
  }, []);

  // Referência do valor anterior
  useEffect(() => {
    oldCountRef.current = count;
  }, [count]);

  return (
    <div className="App">
      <h2>O number é: {number}</h2>
      <h2>O contator é: {count}</h2>
      <h2>O contator anterior era: {oldCountRef.current}</h2>
      <button
        ref={buttonRef}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Adicionar
      </button>
      <h2>O número do useRef é: {numberRef.current}</h2>
    </div>
  );
}

export default App;
