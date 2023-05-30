import React, { useState } from 'react';
import ArrowGroups from '../components/ArrowGroups';
import '../styles/AddHand.css';
import SendBtn from '../assets/images/send.svg';
import Slider from '../components/Slider';
import HandInput from '../components/HandInput';
import RulesCard from '../components/RulesCard';
import { Helmet } from 'react-helmet';

const AddHand = () => {
  const [hand, setHand] = useState('');
  const [input, setInput] = useState('');
  const { width } = window.screen;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(hand);
    setHand('')
  };
  return (
    <div>
      <Helmet>
        <title>Add Hand || Racker.ai</title>
      </Helmet>
      <ArrowGroups />

      <div className="add-hand-container">
        {!input ? (
          <div className="rules-container">
            {width > 550 ? (
              <>
                <RulesCard
                  text1="May occasionally generate incorrect information"
                  text2="May occasionally produce harmful instructions or biased content"
                  text3="Limited knowledge of world and events after 2021"
                />

                <RulesCard
                  text1="May occasionally generate incorrect information"
                  text2="May occasionally produce harmful instructions or biased content"
                  text3="Limited knowledge of world and events after 2021"
                />
              </>
            ) : (
              <Slider />
            )}
          </div>
        ) : (
          <HandInput text={input} />
        )}

        <form onSubmit={handleSubmit} action="">
          <div className="chat-container">
            <input
              type="text"
              onChange={(e) => setHand(e.target.value)}
              placeholder="Tell me your hand"
              value={hand}
            />
            <button type="submit">
              <img src={SendBtn} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHand;
