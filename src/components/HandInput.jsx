import React from 'react';
import '../styles/HandInput.css';
import Avtar from '../assets/images/Avatar.svg';
import Logo from '../assets/images/Logo.svg';
import Tick from '../assets/images/Tick.svg';
import Default from '../assets/images/Default.svg';
import Edit from '../assets/images/Edit.svg';

const HandInput = ({ text }) => {
  return (
    <div className="chatContainer">
      <div className="userChat">
        <p>{text}</p>
        <img src={Avtar} alt="" />
      </div>

      <div className="boatChatout">
        <div className="boatChat">
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{' '}
          </p>
        </div>

        <div className="otherOptions">
          <button>
            <img src={Tick} alt="" />
            <p>Correct</p>
          </button>

          <button>
            <p>Save to default</p>
            <img src={Default} alt="" />
          </button>

          <button>
            <p>Edit</p>
            <img src={Edit} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HandInput;
