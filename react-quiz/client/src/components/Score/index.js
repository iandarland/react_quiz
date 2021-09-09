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
            <h3>score: <span id = "score">{props.score}</span></h3>
        </div>
    )
}

export default Score