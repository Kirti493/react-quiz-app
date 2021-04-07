import React from "react";

const Questionarie = question => {
  <div>
    <div className="bg-white text-purple-800 p-10 rounded shadow-md">
      <h2
        className="text-2xl"
        dangerouslySetInnerHTML={{ __html: questions[0].question }}
      />
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
        {questions[0].correct_answer}
      </button>
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
        {questions[0].incorrect_answers[0]}
      </button>
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
        {questions[0].incorrect_answers[1]}
      </button>
      <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
        {questions[0].incorrect_answers[2]}
      </button>
    </div>
  </div>;
};
