import React from 'react';
import PropTypes from 'prop-types';

const ButtonComp = ({ onClick, label, type, borderColor, width, height, backgroundColor, 
                      color, fontSize}) => {


  return (
    <button 
    type={type} 
    onClick={onClick}
    style={{borderRadius: "10px",
            borderColor,
            backgroundColor,
            color,
            width,
            height, 
            fontSize}}>
      {label}
    </button>
  );
};

ButtonComp.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"])
};

ButtonComp.defaultProps = {
  type: "button",
};

export default ButtonComp;