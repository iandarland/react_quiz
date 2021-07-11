import React from "react"

function Timer(props) {


    setTimeout(function(){
        props.setTime(props.time -1)
        if(props.time < 1){
            props.setGameOver(true)
        }
    }, 1000);

    return(
        <div>
            <h3> Time Remaining: {props.time}</h3>
        </div> 
    )
}

export default Timer