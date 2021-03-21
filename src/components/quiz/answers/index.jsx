import React, {useState} from "react";
import "./answers.style.css";
import answers from '../../../data/answer'
import correct from '../../../data/correct'

import { Answer } from './answer'

export const Answers = (props) =>  {
    const [isAnswered, setIsAnswered] = useState(false);

    const answerList = answers.filter(el => el.test_id === props.testId)
    const correctAnswer = correct.filter(el => el.test_id === props.testId)

    return (
        <>
            {answerList.map((el, index) => (
                <Answer 
                    key={el.id}
                    answer={el.answer}
                    isCorrect={el.id === correctAnswer[0].answer_id}
                    setIsAnswered={setIsAnswered}
                    isAnswered={isAnswered}
                    />
            ))} 
        </>
    )
};

export default Answers;