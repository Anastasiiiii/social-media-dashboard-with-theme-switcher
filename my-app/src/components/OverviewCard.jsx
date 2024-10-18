import React from "react";
import "../styles/Formulas.css";
import "../styles/OverviewCard.css";

const OverviewCard = ({ cardName, mediaIcon, number, arrowIcon, visitsNumber, arrowColor }) => {
    return (
        <div className="overview-card-container">
            <div className="card-name-container">
                <p>{cardName}</p><span>{mediaIcon}</span>
            </div>
            <div className="card-number-container">
                <p className="big-number">{number}</p>
                <p className="arrow-text" style={{color: arrowColor}}>{arrowIcon}&nbsp;&nbsp;{visitsNumber}&nbsp;Today</p>
            </div>
        </div>
    )
}

export default OverviewCard;