import { get } from "mongoose"
import React, {useState, useEffect} from "react"
import API from "../../utils/API"

function GameOver(props) {

    const [totals, setTotals] = useState({
        score: props.score,
        userName: ""
    })
    const [allScores, setAllScores] = useState([])

    useEffect(() =>{
        getScores()
    },[])

    useEffect(() => {
        console.log(allScores)
    },[allScores])

    function getScores(){
        API.getScores()
        .then(res => setAllScores(res.data))
        .catch(err => console.log(err))
    }

    function handleInputChange(event) {
        const { name, value } = event.target
        setTotals({ ...totals, [name]: value })
    }

    function saveScore(event){
        event.preventDefault()
        console.log(totals)
        API.logScore(totals)
        .then(document.getElementById("scoreForm").style.display= "none")
        .then(getScores())
        .then(document.getElementById("scoresList").style.display="block")
        .catch(err=>console.log(err))
    }

    return(
    <>
        <h1>Thanks for playing!</h1>
        <h3>Your Score Was {props.score}</h3>
        <form id="scoreForm">
            <input type="text" name="userName" placeholder="enter your name" onChange={handleInputChange}></input>
            <button onClick= {saveScore}>Submit</button>
        </form>
        <ol id= "scoresList" style= {{display: "none"}}>
            {allScores.map(data => (
               data.userName===totals.userName?
                <li><b>{data.userName} - {data.score}</b></li>
                :
                <li>{data.userName} - {data.score}</li>
            ))}
        </ol>
        <button onClick = {props.restartGame}>Play Again</button>
    </>
    )
}

export default GameOver