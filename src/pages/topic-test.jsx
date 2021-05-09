import React from "react";
import {TopicCard} from "../components/card";
import topics from '../data/topic';
import Header from "../components/header";
import Footer from "../components/footer";

import "./style.css";

const TopicTest = () => {
    return (
        <>
        <Header title={"Сэдвийн тест"}/>
        <div className="topic-body">
            <div className="container">
                <div className="topic-cards">
                    {topics.map((el) => (
                        <TopicCard key={el.id} name={el.topics_name} number={el.id} questions={el.question_number}/>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
};

export default TopicTest;