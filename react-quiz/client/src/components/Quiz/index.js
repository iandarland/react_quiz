import React, {useState, useEffect} from 'react'

function Quiz (props){

    const [answers, setAnswers] = useState([])

    useEffect(() => {
        scramAns()
    },[props.question])

    const scramAns = () =>{
        const ans = props.question.correct
        const poss = props.question.possible
        const all  = poss.concat(ans)
        shuffleArray(all)
        setAnswers(all)
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return(
        <div>
            <div>
                <img src = {props.question.img}/>
            </div>
            <div>
                <button value = {answers[0]} onClick = {props.handleBtnClick}>{answers[0]}</button>
                <button value = {answers[1]} onClick = {props.handleBtnClick}>{answers[1]}</button>
                <button value = {answers[2]} onClick = {props.handleBtnClick}>{answers[2]}</button>
                <button value = {answers[3]} onClick = {props.handleBtnClick}>{answers[3]}</button>
            </div>
        </div>
    )
}

export default Quiz