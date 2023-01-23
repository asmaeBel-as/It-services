import React from "react";
import "./SecCard.css";

const SecCard = ({ emoji, heading, detail, color }) => {
  return (
    <div className="seccard" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span className="heading">{heading}</span>
      <span className="desc">{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default SecCard;
