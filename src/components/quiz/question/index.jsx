import React from "react";
import "./question.style.css";

export const Question = (props) =>  {
    return (
        <>
            <div className="title">
                <p className="title-code">{props.code}.</p>
                <p className="title-question">{props.question}</p>
            </div>
            {!!props.imageURL ? <img src={props.imageURL} alt=""/> : <></>}
        </>
    )
};

export default Question;
