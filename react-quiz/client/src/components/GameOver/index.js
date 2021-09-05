import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function GameOver(props) {
  const [totals, setTotals] = useState({
    score: props.score,
    userName: "",
  });
  const [allScores, setAllScores] = useState([]);

  useEffect(() => {
    getScores();
  }, []);

  useEffect(() => {
    console.log(allScores);
  }, [allScores]);

  function getScores() {
    API.getScores()
      .then((res) => setAllScores(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setTotals({ ...totals, [name]: value });
  }

  function saveScore(event) {
    event.preventDefault();
    console.log(totals);
    API.logScore(totals)
        .then(res => setTotals(res.data))
      .then((document.getElementById("scoreForm").style.display = "none"))
      .then(getScores())
      .then((document.getElementById("scoresList").style.display = "table"))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>Thanks for playing!</h1>
      <h3>Your Score Was {props.score}</h3>
      <form id="scoreForm">
        <input
          type="text"
          name="userName"
          placeholder="enter your name"
          onChange={handleInputChange}
        ></input>
        <button onClick={saveScore}>Submit</button>
      </form>
      <div className="row justify-content-center">
      <table
        id="scoresList"
        className="table table-dark col-10"
        style={{ display: "none" }}
        >
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {allScores.map((data, index) =>
            data._id === totals._id && data.score === totals.score ? (
                <tr className="table-success">
                <th className="table-success" scope="row">
                  {index + 1}
                </th>
                <td className="table-success">{data.userName}</td>
                <td className="table-success">{data.score}</td>
              </tr>
            ) : (
                <tr>
                <th scope="row">{index + 1}</th>
                <td>{data.userName}</td>
                <td>{data.score}</td>
              </tr>
            )
            )}
        </tbody>
      </table>
    </div>
      <button className = "btn btn-success" onClick={props.restartGame}>Play Again</button>
    </>
  );
}

export default GameOver;
