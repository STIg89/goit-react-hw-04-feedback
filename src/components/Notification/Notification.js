import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Notification = ({ message }) => {
  return Notify.info(`${message}`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
