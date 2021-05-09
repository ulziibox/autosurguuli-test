import React from "react";
// import correct from '../../../../data/correct'

import "./answer.style.css";

export const Answer = (props) => {
  // console.log('====================================');
  // console.log(props);
  // console.log('====================================');
  if (props.isAnswered && !props.isExam) {
    if (props.isCorrect) {
      return (
        <button className="answer-btn anwser-btn-correct">{props.answer}</button>
      )
    }
    if (props.answerId === props.answeredId) {
      return (
        <button className="answer-btn anwser-btn-wrong">{props.answer}</button>
      )
    }
    return (
      <button className="answer-btn ">{props.answer}</button>
    )

  }
  if (props.answerId === props.answeredId) {
    return (
      <button className="answer-btn anwser-btn-correct">{props.answer}</button>
    )
  }
  return (
    <button onClick={() => props.setAnswerItem(props.answerId)} className="answer-btn">{props.answer}</button>
  )


};

export default Answer;
