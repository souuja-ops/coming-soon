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
          Hi<span role="img" aria-label="wave">👋</span>
          <br />EVERYONE<span role="img" aria-label="cool">😎</span>
        </h1>

        <h2>
          Postponed the launching date because of a few production bugs
          <br />
          But Stay Tuned!<span role="img" aria-label="tv">📺</span>
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
