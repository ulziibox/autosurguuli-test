import React from "react";
import { useHistory } from "react-router-dom";
import "./header.style.css";

export const Header = (props) =>  {
    let history = useHistory();

    return (
        <div className="fixed-header">
          <div className="header-container">
              {props.type != 'examTest' ? <div className="left-section">
                <button className="backBttn" onClick={() => history.goBack()}>
                    Буцах
                </button>
                <p><b> {props.title}</b></p>
              </div> : <div className="right-section">
              <button className="backBttn redBttn" onClick={() => history.goBack()}>
                    Шалгалт дуусгах
                </button> <p>Хугацаа: <b>15:00</b></p>
              </div>}
          </div>
        </div>
    )
    
};

export default Header;