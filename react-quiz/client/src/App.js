import React, {useState, useEffect} from 'react'
import questions from "./questions.json"
import './App.css';
import Score from "./components/Score"
import Quiz from "./components/Quiz"
import Timer from "./components/Timer"
import GameOver from "./components/GameOver"

function App() {


  const [quiz, setQuiz] = useState([])

const [question, setQuestion] = useState({
  possible: [],
  img: "",
  correct: '',
  index: 0
})
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(false)
const [time, setTime] = useState(60)


useEffect(() => {
    setQuiz(questions)
    setQuestion(quiz[0])
},[])

const handleBtnClick = (e) => {
  if (e.target.value === question.correct){
    setScore(score + 1)
  }
  setQuestion(quiz[question.index])
}

const restartGame = () => {
  setTime(60)
  setGameOver(false)
  setQuestion(quiz[0])
  setScore(0)
}

  if(question && !gameOver){

  return (
    <>
      <Timer setGameOver = {setGameOver} setTime = {setTime} time = {time}/>
      <Score score = {score}/>
      <Quiz handleBtnClick = {handleBtnClick} question = {question} />
    </>
  );
  }
  else if(score && gameOver){
    return(
      <GameOver setGameOver = {setGameOver} score = {score} restartGame = {restartGame}/>
    )
  } else {
    return(
      <button onClick = {restartGame}>Play Game</button>
    )
  }
}

export default App;
