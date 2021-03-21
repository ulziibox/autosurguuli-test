import React from "react";
import "./card.style.css";

export const TopicCard = (props) =>  {
    return (
        <a href={'/topic-test/' + props.number}>
            <div className="card-body">
            <p className="card-title">Сэдэв: №{props.number}</p>
            <h3 className="card-name">{props.name}</h3>
            <p className="card-footer">{props.questions} асуулт</p>
            </div>
        </a>
    )
    
};

export default TopicCard;