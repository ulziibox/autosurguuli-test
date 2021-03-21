import React from "react";
import "./answers.style.css";
import answers from '../../../data/answer'

import { Answer } from './answer'

export const Answers = (props) =>  {

    const answerList = answers.filter(el => el.test_id === props.testId)
    return (
        <>
            {answerList.map((el, index) => (
                <Answer 
                    key={el.id}
                    answer={el.answer}/>
            ))} 
        </>
    )
};

export default Answers;