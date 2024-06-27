import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) {
      return true;
    }
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1); 
  
  };

  const removeValue = () => {
    if (counter <= 0) {
      return true;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Conter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
