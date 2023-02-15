import { useState } from 'react';
import { Wrapper } from './Widget.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Widget = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeValue = value => value + 1;

  const onFeedbackIncrement = e => {
    switch (e.target.value) {
      case 'good':
        setGood(changeValue);
        break;
      case 'neutral':
        setNeutral(changeValue);
        break;
      case 'bad':
        setBad(changeValue);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const buttons = Object.keys({ good, neutral, bad });

  return (
    <Wrapper>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={onFeedbackIncrement}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Math.round((good / countTotalFeedback()) * 100)}
          />
        </Section>
      )}
    </Wrapper>
  );
};
