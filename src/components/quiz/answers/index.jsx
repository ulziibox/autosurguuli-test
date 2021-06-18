import React, {useState, useEffect} from "react";
import "./answers.style.css";
import answers from '../../../data/answer'
import correct from '../../../data/correct'
import data from '../../../data/test'
import {Answer} from './answer'

export const Answers = (props) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [showedDesc, setShowedDesc] = useState(false)

  function QuestionDescription() {
    const desc = data[props.testId]?.desc;
    return (
      <>
      {desc ? 
        <div className="description">
          <i>{desc}</i>
        </div> 
      : null}
      </>
    )
  }

  function setAnswerItem(answerId) {
    setIsAnswered(true);
    if (props.setAnswerId) {
      props.setAnswerId(answerId, answerId === correctAnswer.answer_id);
    }
    setShowedDesc(true);
  }

  const answerList = answers.filter(el => el.test_id === props.testId)
  const correctAnswer = correct.find(el => el.test_id === props.testId)

  return (
    <>
      {answerList.map((el) => (
        <Answer
          answeredId={props?.answeredId}
          key={el.id}
          answerId={el.id}
          answer={el.answer}
          isCorrect={el.id === correctAnswer.answer_id}
          setAnswerItem={setAnswerItem}
          isExam={!!props.isExam}
          isAnswered={isAnswered}
        />
      ))}
      {showedDesc === true && props.isExam === false ? <QuestionDescription/> : null}
    </>
  )
};

export default Answers;
