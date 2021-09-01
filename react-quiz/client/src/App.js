import React, {useState, useEffect} from 'react'
import questions from "./questions.json"
import './App.css';
import Score from "./components/Score"
import Quiz from "./components/Quiz"
import Timer from "./components/Timer"
import GameOver from "./components/GameOver"
import shuffleArray from './components/Functions';

function App() {


const [quiz, setQuiz] = useState([])

const [question, setQuestion] = useState({
  possible: [],
  img: "",
  correct: '',
  index: 0
})
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState("start")
const [time, setTime] = useState(60)


useEffect(() => {
    setQuiz(questions)
    setQuestion(quiz[0])
},[])

const handleBtnClick = (e) => {
  e.preventDefault()
  if (e.target.value === question.correct){
    setScore(score + 1)
  }
  const currentIndex = questions.indexOf(question);
  const nextIndex = (currentIndex + 1) % questions.length;
  if(nextIndex >= quiz.length -1){
    setGameOver("over")
  }

  setQuestion(quiz[nextIndex])
}

const restartGame = () => {
  setTime(10)
  setGameOver("play")
  shuffleArray(quiz)
  setQuestion(quiz[0])
  setScore(0)
}

  if(gameOver === "play"){

  return (
    <div>
      <Timer setGameOver = {setGameOver} setTime = {setTime} time = {time}/>
      <Score score = {score}/>
      <Quiz handleBtnClick = {handleBtnClick} question = {question} />
    </div>
  );
  }
  else if(gameOver === "over"){
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
