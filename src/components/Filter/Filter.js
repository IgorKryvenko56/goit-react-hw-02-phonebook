import React from 'react';
import PropTypes from 'prop-types';
// import { Input, PhonebookImage } from './Filter.styled';



const Filter = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <>
      
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;