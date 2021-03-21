import React from "react";

import "./card-home.style.css";
export const Card = (props) => (
    <div className="card-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.href}><button className="button">Эхлэх</button></a>
    </div>
);