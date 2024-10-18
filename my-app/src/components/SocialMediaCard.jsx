import React from "react";
import "../styles/SocialMediaCard.css";
import "../styles/Formulas.css";

const SocialMediaCard = ({ icon, username, followersAmount, viewersName, visitsNumber, borderColor, todayTextColor, arrowIcon }) => {
    return (
        <div className={`social-media-card-container ${borderColor.includes('gradient') ? 'gradient-border' : 'solid-border'}`} style={{ borderTop: `5px solid ${borderColor}` }}>
            <div className="icon">
                <span>{icon}</span><p>{username}</p>
            </div>
            <div className="followers-amount">
                <h1>{followersAmount}</h1>
                <p>{viewersName}</p>
            </div>
            <div className="joined-viewers-amount" style={{ color: `${todayTextColor}` }}>
                <p>{arrowIcon}&nbsp;&nbsp;{visitsNumber}&nbsp;Today</p>
            </div>
        </div>
    )
}

export default SocialMediaCard;