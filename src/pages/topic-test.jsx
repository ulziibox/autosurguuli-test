import React, { useState, useEffect} from "react";
import {TopicCard} from "../components/card";
import topics from '../data/topic';
import "./style.css";
const TopicTest = () => {
    return (
        <div className="topic-body">
            <div className="container">
                <div className="topic-cards">
                    {topics.map((el) => (
                        <TopicCard key={el.id} name={el.topics_name} number={el.id} questions={el.question_number}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default TopicTest;