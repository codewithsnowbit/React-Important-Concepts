import React from "react";
import "./styles.css";
function Joke(props) {
  return (
    <div>
      <h1
        className="jokeTitle"
        style={{ display: props.question ? "block" : "none" }}
      >
        Question: {props.question}
      </h1>
      <h3 className="jokeAns" style={{ color: !props.punchLine && "#888888" }}>
        Answer: {props.punchLine}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;
