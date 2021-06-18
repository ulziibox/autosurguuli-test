import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import topic from '../data/topic';
import tests from '../data/test';
// import answers from '../data/answer';
import Header from "../components/header"
import Footer from "../components/footer";

import "./style.css";

import { Quiz } from '../components/quiz';

const SingleTest = () => {
    let { topicId } = useParams();

    if (topicId > 24) {
        return (
            <Redirect to={{pathname: "/404"}}/>
        )
    }
    const topicInfo = topic.find(({ id }) => id === topicId);
    const topicTest = tests.filter(el => el.topics_id === topicId);
    
    const topicTestTitle = topicInfo.id + '. ' + topicInfo.topics_name;

    // console.log(topicTestTitle);

    return (
        <>
        <Header title={topicTestTitle}/>
        <div className="single-test-body">
            <div className="container">
                {/* <a>{topicInfo.id}: {topicInfo.topics_name}</a> */}
                {topicTest.map((el, index) => (
                    <Quiz 
                        key={el.id}
                        testId={el.id}
                        topicId={el.topics_id}
                        code={index + 1}
                        question={el.questions} 
                        imageURL={el.images}
                        description={el.description}
                    />
                ))}
                <div className="no-more">
                    <p>Асуулт дууссан</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
};

export default SingleTest;