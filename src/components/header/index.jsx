import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Countdown from 'react-countdown';
import "./header.style.css";

export const Header = (props) =>  {
    let history = useHistory();
    const [isBack, setIsBack] = useState(props.type !== 'examTest');

    const Completionist = () => <span>Цаг дууслаа</span>;
 
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        setIsBack(true);
        props.endExam(); 
        return <Completionist />;
      } else {
        return <span>{minutes}:{seconds}</span>;
      }
    };

    return (
        <div className="fixed-header">
          <div className="header-container">
              {isBack ? <div className="left-section">
                <button className="backBttn" onClick={() => history.goBack()}>
                    Буцах
                </button>
                <p><b> {props.title}</b></p>
              </div> : <div className="right-section">
                <button className="backBttn redBttn" onClick={() => {props.endExam(); setIsBack(true)}}>
                    Шалгалт дуусгах
                </button> <p>Хугацаа: <b>
                  <Countdown
                    date={Date.now() + 1200000}
                    renderer={renderer}
                  />
                  </b></p>
              </div>}
          </div>
        </div>
    )
    
};

export default Header;