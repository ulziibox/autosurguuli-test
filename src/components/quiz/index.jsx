import React, {useState} from "react";
import "./quiz.style.css";


import {Question} from './question'
import {Answers} from './answers'

export const Quiz = (props) => {
  const [answeredId, setAnsweredId] = useState(null);
  const setAnswerId = (id, isTrue) => {
    setAnsweredId(id);
    if (props.setQuizResult) {
      props.setQuizResult(id, props.testId, isTrue);
    }
  }
  return (
    <div className="quiz-body">
      <Question
        isExam={!!props.isExam}
        code={props.code}
        question={props.question}
        imageURL={props.imageURL}
        topicId={props.topicId}/>
      <Answers
        answeredId={answeredId}
        isExam={!!props.isExam}
        setAnswerId={setAnswerId}
        testId={props.testId}/>
    </div>
  )

};

export default Quiz;
