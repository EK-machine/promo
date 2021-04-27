import React from 'react';
import { Link } from 'react-router-dom';
import './notfoundpage.css';

function NotFoundPage() {
  return (
    <div className="notgoundpage__container">
      <h1>OUUUUPS!!!</h1>
      <h4>Here must be an error...</h4>
      <h4>Please click the button below to return to the home page.</h4>
      <Link to="/main/home" className="notgoundpage__link">
        HOME PAGE
      </Link>
    </div>
  );
}
export default NotFoundPage;
