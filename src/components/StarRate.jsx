import React, { useState } from 'react';
import './starrate.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
  gold: '#ffd700',
  grey: '#a9a9a9',
};

function StarRate() {
  const [isRated, setIsRated] = useState(0);
  const [isHovered, setIsHovered] = useState(0);
  const handleClick = (rate) => {
    setIsRated(rate);
  };
  const handleMouseOver = (rate) => {
    setIsHovered(rate);
  };

  const handleMouseLeave = () => {
    setIsHovered(0);
  };
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star__container">
      {stars.map((star, index) => (
        <FontAwesomeIcon
          className="star__item"
          key={star}
          icon={faStar}
          color={(isHovered || isRated) > index ? colors.gold : colors.grey}
          onClick={() => {
            handleClick(index + 1);
          }}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </div>
  );
}

export default StarRate;
