import PropTypes from 'prop-types';
import { BtnWrap, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {options.map(btn => {
        return (
          <Btn key={btn} type="button" value={btn} onClick={onLeaveFeedback}>
            {btn}
          </Btn>
        );
      })}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
