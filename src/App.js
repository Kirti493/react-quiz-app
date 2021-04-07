import React, { useState, useEffect } from "react";
import "./style.css";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

export default function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
      });
  }, []);

  return questions.length > 0 ? (
    <div className="container">

  ) : (
    <h2 className="text-2xl text-white font-bold">Loading....</h2>
  );
}
