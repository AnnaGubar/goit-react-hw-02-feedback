import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// PropTypes.node - ожидает любую сущность (число, строку ...)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
