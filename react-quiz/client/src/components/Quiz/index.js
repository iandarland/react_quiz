import React, { useState, useEffect } from "react";
import "./style.css"

function Quiz(props) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    scramAns();
  }, [props.question]);

  const scramAns = () => {
    const ans = props.question.correct;
    const poss = props.question.possible;
    const all = poss.concat(ans);
    shuffleArray(all);
    setAnswers(all);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className="quiz-wrap align-items-center justify-content-center">
      <div className= "quiz-content">
        <div className="text-center">
          <img src={props.question.img} />
        </div>
        <div className="text-center">
          {answers.map((answer) => (
            <button
              className="btn btn-success ans-btn"
              value={answer}
              onClick={props.handleBtnClick}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
