import { useState, useEffect } from "react";
const Counter = () => {
  let [counter, setCounter] = useState(0);
  const counterHandler = () => {
    console.log("clicked");
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const savedCounter = localStorage.getItem("counter");
    if (savedCounter) {
      setCounter(parseInt(savedCounter));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);
  return (
    <>
      <div>Number; {counter}</div>
      <button onClick={counterHandler}>+</button>
    </>
  );
};
export default Counter;
