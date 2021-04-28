import React, { useState } from 'react';
import './starrate.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StarRate() {
  const [isRated, setIsRated] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="star__container">
      {[...Array(5)].map((star, ind) => {
        const ratingValue = ind + 1;
        return (
          <label>
            <input
              id="star__rate-item"
              className="star__input"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setIsRated(ratingValue)}
            />
            <FontAwesomeIcon
              className="star__icon"
              color={ratingValue <= (isHovered || isRated) ? 'gold' : 'grey'}
              icon={faStar}
              onMouseEnter={() => setIsHovered(ratingValue)}
              onMouseLeave={() => setIsHovered(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRate;
