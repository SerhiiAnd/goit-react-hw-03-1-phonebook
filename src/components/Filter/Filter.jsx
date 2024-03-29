import React from 'react';
import css from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.input}>
    Find contacts by name:
    <input
      className={css.label}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
