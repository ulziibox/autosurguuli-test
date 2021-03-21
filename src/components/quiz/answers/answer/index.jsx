import React from "react";
import "./answer.style.css";

export const Answer = (props) =>  {
    return (
        <button className="answer-btn">{props.answer}</button>
    )
};

export default Answer;