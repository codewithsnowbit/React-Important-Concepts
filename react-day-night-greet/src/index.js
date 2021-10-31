import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function App() {
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    fontSize: 30
  };
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning!";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 19) {
    timeOfDay = "Afternoon!";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "Night!";
    styles.color = "#D90000";
  }

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
