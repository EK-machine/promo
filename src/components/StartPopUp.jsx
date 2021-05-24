import React, { useState, useEffect } from 'react';
import './startpopup.css';

function StartPopUp() {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    const popped = sessionStorage.getItem('popUpStatus');
    if (!popped) {
      setIsOpened(true);
      sessionStorage.setItem('popUpStatus', 'statused');
    }
  }, []);

  if (!isOpened) return null;

  return (
    <div className="popUp__container">
      <div className="popUp__centering">
        <div className="popUp__message-close_container">
          <button
            onClick={() => setIsOpened(false)}
            className="popUp__message-close_button"
            type="button"
          >
            close
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
