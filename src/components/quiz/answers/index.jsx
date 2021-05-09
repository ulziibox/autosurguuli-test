import React, {useState} from "react";
import "./answers.style.css";
import answers from '../../../data/answer'
import correct from '../../../data/correct'

import {Answer} from './answer'

export const Answers = (props) => {
  const [isAnswered, setIsAnswered] = useState(false);

  function setAnswerItem(answerId) {
    setIsAnswered(true);
    if (props.setAnswerId) {
      props.setAnswerId(answerId, answerId === correctAnswer.answer_id);
    }

  }

  const answerList = answers.filter(el => el.test_id === props.testId)
  const correctAnswer = correct.find(el => el.test_id === props.testId)

  return (
    <>
      {answerList.map((el, index) => (
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
    </>
  )
};

export default Answers;
