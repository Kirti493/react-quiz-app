import React from "react";
import "./style.css";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

export default function App() {
  return (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">
          This is where we're going to have the question.
        </h2>
      </div>
      <button className="bg-white w-1/2 p-4 text-purple-800">Answer 1</button>
      <button className="bg-white w-1/2 p-4 text-purple-800">Answer 2</button>
      <button className="bg-white w-1/2 p-4 text-purple-800">Answer 3</button>
      <button className="bg-white w-1/2 p-4 text-purple-800">Answer 4</button>
    </div>
  );
}
