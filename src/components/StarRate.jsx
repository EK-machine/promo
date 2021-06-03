import React, { useState } from 'react';
import './starrate.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

function StarRate({ viewOnly, rating }) {
  const [isRated, setIsRated] = useState(rating);
  const [isHovered, setIsHovered] = useState(rating);
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
          className={
            (isHovered || isRated) > index
              ? classNames('star__item star__item-gold', {
                  'star__rating-disabled': viewOnly,
                })
              : classNames('star__item star__item-grey', {
                  'star__rating-disabled': viewOnly,
                })
          }
          key={star}
          icon={faStar}
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
