import "./App.css";
import React, { useState } from "react";
const random = Math.floor(Math.random() * 10);
function App() {
  function guessNumber() {
    if (randomNumber !== random) {
      console.log("you are wrong");
    } else {
      console.log("You are wright");
    }
  }
  const [randomNumber, setrandomNumber] = useState("");

  return (
    <div className="App">
      <h5 className="title">Choose WISELY !!</h5>

      <p> {random} </p>
      <input onChange={(e) => setrandomNumber(e.target.value)} />

      <button onClick={guessNumber}>Try it your self</button>
    </div>
  );
}

export default App;
