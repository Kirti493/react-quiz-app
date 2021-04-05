import React from "react";
import "./style.css";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

export default function App() {
  return (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">
          1. This is where we're going to have the question.
        </h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">
          Answer 1
        </button>
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">
          Answer 2
        </button>
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">
          Answer 3
        </button>
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">
          Answer 4
        </button>
      </div>
    </div>
  );
}
