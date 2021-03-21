import React from "react";
// import correct from '../../../../data/correct'

import "./answer.style.css";

export const Answer = (props) =>  {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    if(props.isAnswered){
        if(props.isCorrect) {
        return (
            <button  className="answer-btn anwser-btn-correct" >{props.answer}</button>
        )
    }
        return (
            <button className="answer-btn anwser-btn-wrong">{props.answer}</button>
        )
    
    }
        return (
            <button onClick={()=>props.setIsAnswered(true)} className="answer-btn">{props.answer}</button>
        )
    

    
   
};

export default Answer;