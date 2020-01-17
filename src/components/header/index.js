import React from "react";
import './styles.css';

function Header(props) {
  return <div className="headerCustom sticky-top container-fluid d-flex justify-content-between align-content-center flex-wrap">
           <h3>{props.clickedMessage}</h3>
           <h3>Current Score: {props.correctGuess}</h3>
           <h3>High Score: {props.highScore}</h3>
         </div>;
}

export default Header;