import React from 'react';
import rulesImg from '../assets/images/rules.svg';

const RulesCard = ({text1, text2, text3}) => {
  return (
    <div className="rules-outer">
      <div className="rules-head">
        <img src={rulesImg} alt="" />
        <p className="rules-head-text">Rules</p>
      </div>

      <div className="rules-card">
        <p>{text1}</p>
      </div>

      <div className="rules-card">
        <p>{text2}</p>
      </div>

      <div className="rules-card">
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default RulesCard;
