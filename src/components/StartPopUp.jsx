import React, { useState, useEffect, useRef } from 'react';
import './startpopup.css';

function StartPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef();
  const ESC_KEY_CODE = 27;

  useEffect(() => {
    const popped = sessionStorage.getItem('popUpStatus');
    if (!popped) {
      setIsOpen(true);
      sessionStorage.setItem('popUpStatus', 'visited');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscKeyPress);
    return () => window.removeEventListener('keydown', closeOnEscKeyPress);
  }, []);

  const closePopUp = () => {
    setIsOpen(false);
  };

  const closeOnEscKeyPress = (e) => {
    if (e.keyCode === ESC_KEY_CODE) {
      closePopUp();
    }
  };

  const clickOutsidePopUp = (e) => {
    if (popUpRef.current === e.target) {
      closePopUp();
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
