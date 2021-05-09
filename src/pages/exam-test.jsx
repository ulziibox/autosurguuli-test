import React, {useEffect, useState} from "react";
import topic from '../data/topic';
import tests from '../data/test';
import {Quiz} from "../components/quiz";
import Header from "../components/header"
// import Modal from 'react-modal';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)',
//       height   : '80%',
//       width: '80%',
//     }
//   };

// Modal.setAppElement('#examTest')

toast.configure();
const ExamTest = () => {
    // var subtitle;
  const [examTest, setExamTest] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [result, setResult] = useState([]);
//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

//   function closeModal(){
//     setIsOpen(false);
//   }


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
    // openModal()
    let correctCounter = 0;

    for(let i = 0; i < 20; i++) {
        if (result[i].isTrue === true) correctCounter++
    }
        
    if(correctCounter >= 17) {
        toast.success(`Та ${correctCounter} асуултад зөв хариулж шалгалтад тэнцлээ. Баяр хүргэе`, {position: toast.POSITION.TOP_CENTER, autoClose: 25000});
    } else {
        toast.error(`Та ${20 - correctCounter} асуултад буруу хариулж шалгалтад уналаа. Харамсалтай байна`, {position: toast.POSITION.TOP_CENTER, autoClose: 25000});
    }
  }

  return (
      <>
      <Header type={"examTest"} endExam={endExam}/>
        <div className="single-test-body">
            <div className="container">
                {/* <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                     <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                </Modal> */}
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
        </div>
    </>
  )
};

export default ExamTest;
