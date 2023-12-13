
import React from 'react';
import './Button1.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--section'];

const SIZES = ['btn--med', 'btn--large'];

export const Button1 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/projects' className='btn-mobile1'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <div className='bar'></div>
    </Link>
  );
};
