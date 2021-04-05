import React from "react";
import "./style.css";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

export default function App() {
  return (
    <div className="container">
      <div>This is where we're going to have the question.</div>
      <div>Answer 1</div>
      <div>Answer 2</div>
      <div>Answer 3</div>
      <div>Answer 4</div>
    </div>
  );
}
