import { useState, useRef, useEffect } from "react";
import Input from "./Input";
import Counter from "./Counter";
import Card from "./Card";
import Title from "./Title";
import Hello from "./Hello";

const data = [
  { id: 1, cardName: "Adrian", cardAge: "32", cardJob: "Engineer" },
  { id: 2, cardName: "Manuel", cardAge: "32", cardJob: "Engineer" },
  { id: 3, cardName: "Pedro", cardAge: "32", cardJob: "Engineer" },
];
function App({ children }) {
  const [showText, setShowText] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const titleRef = useRef();
  const toggleHandler = () => {
    setShowText(!showText);
  };

  const toggleHandler2 = () => {
    setToggle(!toggle);
  };

  const clickCountHandler = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    console.log(titleRef.current);
  }, []);
  return (
    <div className="App">
      <h1 style={{ color: "purple", backgroundColor: "white" }}>
        Let's build or first react application
      </h1>
      <p className="title">this is a paragraph</p>
      <Input />
      <Counter />
      <button onClick={toggleHandler}>toggle</button>
      {showText && <h1>text</h1>}
      {children}
      {clickCount}
      {data.map((dataCard) => (
        <Card
          key={dataCard.id}
          cardName={dataCard.cardName}
          cardAge={dataCard.cardAge}
          cardJob={dataCard.cardJob}
          counter={clickCountHandler}
        />
      ))}

      <Title />
      <button onClick={toggleHandler2}>toggle 2</button>
      {toggle && <Hello />}
      <div ref={titleRef}>something goes here</div>
    </div>
  );
}

export default App;
