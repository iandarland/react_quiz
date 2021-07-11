import React from "react"

function GameOver(props) {
    return(
    <>
        <h1>Thanks for playing!</h1>
        <h3>Your Score Was {props.score}</h3>
        <button onClick = {props.restartGame}>Play Again</button>
    </>
    )
}

export default GameOver