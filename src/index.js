import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Hi{'\u1F44B'}
          <br />I am ALPHA_CODER{'\u1F60E'}
        </h1>

        <h2>
          I am preparing something new
          <br />
          Stay Tuned!{'\u1F4FA'}
        </h2>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
