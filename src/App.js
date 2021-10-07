import "./App.css";
import React, { useState } from "react";
import imge from "./pic/immgg.jpg";
import signature from "./pic/sig.gif";
import Discreption from "./components/Discreption";
const random = Math.floor(Math.random() * 10);

function App() {
  const [userInput, setUserInput] = useState("");
  const [numberOfGuess, setNumberOfGuess] = useState(3);
  const [msg, setMsg] = useState("welcome");
  let array = [random - 1, random - 2, random + 1, random + 2];

  function guessNumber() {
    // console.log(random);
    if (numberOfGuess === 0) {
      setMsg("No more attepts");
    } else {
      if (+userInput !== +random) {
        if (array.includes(+userInput)) {
          setMsg("You are close!");
        } else {
          setMsg("You are Faaar!");
        }
      } else {
        setMsg("You are wright");
      }
    }

    setNumberOfGuess(numberOfGuess - 1);
    console.log(numberOfGuess);
  }

  function restart() {
    setNumberOfGuess(3);
    window.location.reload();
  }

  return (
    <div>
      <div className="App">
        <h5 className="title"></h5>
        <p> {random}</p>
        <h1> {msg} </h1>

        <input
          class="txt "
          type="text"
          name="choose"
          placeholder="Choose wisely"
          onChange={(e) => setUserInput(e.target.value)}
        />
        {/* if statement for the button*/}
        {numberOfGuess === 0 || msg === "You are wright" ? (
          <button class="butt" onClick={restart}>
            Restart the Game
          </button>
        ) : (
          <button class="butt" onClick={guessNumber}>
            Try it your self
          </button>
        )}
        {/* <button onClick={()=>guessNumber()}>Try it your self</button> */}
      </div>
      <div className="discibe">
        <Discreption />
      </div>

      <img className="sig-detail" src={signature} />
    </div>
  );
}

export default App;
