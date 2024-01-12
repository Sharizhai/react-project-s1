import React from 'react';
import PropTypes from 'prop-types';

const DropdownComp = ({title, options, onChange, value}) => {
  return (
    <>
        <div>
      {<label>{title}</label>}
      <select onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p style={{color: "red", fontSize: "10px"}}>Champ requis</p>
    </div>
    </>
  );
};

DropdownComp.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default DropdownComp;