import React from "react";
import "./quiz.style.css";


import { Question } from './question'
import { Answers } from './answers'

export const Quiz = (props) =>  {
    
    return (
        <div className="quiz-body">
            <Question
                code={props.code} 
                question={props.question} 
                imageURL={props.imageURL}
                topicId={props.topicId}/>
            <Answers testId={props.testId}/>
        </div>
    )
    
};

export default Quiz;