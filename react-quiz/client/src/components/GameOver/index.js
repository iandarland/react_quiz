import React, {useState} from "react"
import API from "../../utils/API"

function GameOver(props) {

    const [totals, setTotals] = useState({
        score: props.score,
        userName: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target
        setTotals({ ...totals, [name]: value })
    }

    function saveScore(event){
        event.preventDefault()
        console.log(totals)
        API.logScore(totals)
        .then(document.getElementById("scoreForm").style.display= "none")
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
        <button onClick = {props.restartGame}>Play Again</button>
    </>
    )
}

export default GameOver