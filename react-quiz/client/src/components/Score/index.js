import React, {useEffect} from "react"

function Score (props){

    useEffect(()=>{
        flashGreen()
    },[props.score])

    const flashGreen = () => {
        const scoreFlash = document.getElementById("score")
        scoreFlash.setAttribute("style", "color : green")
        setTimeout(() => {
            scoreFlash.setAttribute("style", "color : black")
        }, 500);
    } 

    return(
        <div>
            <h1>score: <span id = "score">{props.score}</span></h1>
        </div>
    )
}

export default Score