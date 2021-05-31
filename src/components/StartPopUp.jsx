import React, { useState, useEffect, useRef } from 'react';
import './startpopup.css';

function StartPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef();
  const closePopUp = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const popped = sessionStorage.getItem('popUpStatus');
    if (!popped) {
      setIsOpen(true);
      sessionStorage.setItem('popUpStatus', 'visited');
    }
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closePopUp();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const clickOutsidePopUp = (e) => {
    if (popUpRef.current === e.target) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={popUpRef}
      onClick={clickOutsidePopUp}
      onKeyDown={clickOutsidePopUp}
      className="popUp__container"
    >
      <div className="popUp__centering">
        <div className="popUp__message-close_container">
          <button
            onClick={closePopUp}
            className="popUp__message-close_button"
            type="button"
          >
            X
          </button>
        </div>
        <div className="popUp__message-text_container">
          <p className="popUp__message-text">
            Welcome to the skill representation web page of <br /> junior
            front-end developer Evgenij Kalabukhin
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartPopUp;
