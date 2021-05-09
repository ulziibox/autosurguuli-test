import React, {useEffect, useState} from "react";
import topic from '../data/topic';
import tests from '../data/test';
import {Quiz} from "../components/quiz";

const ExamTest = () => {
  const [examTest, setExamTest] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    let tempData = [];
    let tempResult = [];
    for (let i = 0; i < 20;) {
      let tempTopic = topic[Math.floor(Math.random() * topic.length)];
      let tempTests = tests.filter(f => f.topics_id === tempTopic.id);
      let tempTest = tempTests[Math.floor(Math.random() * tempTests.length)];
      if (tempData.find(t => t?.id === tempTest.id)) {
      } else {
        tempData.push(tempTest);
        tempResult.push({testId: tempTest.id, answerId: '', isTrue: false});
        i++;
      }
    }
    setResult(tempResult);
    setExamTest(tempData);
  }, [])

  function setQuizResult(answerId, testId, isTrue) {
    let tempArray = result;
    let tempInd = result.findIndex(r=>r.testId === testId);
    tempArray[tempInd].answerId = answerId
    tempArray[tempInd].isTrue = isTrue;
    setResult(tempArray);
  }

  function endExam() {
    setIsDone(true);
    console.log(result);
  }

  return (
    <div style={{backgroundColor: 'black'}}>
      <a onClick={() => {
        endExam();
      }} style={{color: 'white'}}>duusgah</a>
      <h3>Шалгалтын тест</h3>
      {examTest.map((el, index) => (
        <Quiz
          setQuizResult={setQuizResult}
          isExam={!isDone}
          key={el.id}
          testId={el.id}
          topicId={el.topics_id}
          code={index + 1}
          question={el.questions}
          imageURL={el.images}
          description={el.description}
        />
      ))}
    </div>
  )
};

export default ExamTest;
