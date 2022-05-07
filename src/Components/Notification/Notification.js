import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <h2 className={s.title}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;