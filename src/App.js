import React, { Component } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const clickedBtnValue = e.currentTarget.textContent;

    this.setState(prevState => ({
      [clickedBtnValue]: prevState[clickedBtnValue] + 1,
    }));
  };

  countTotalFeedback() {
    const gradeArray = Object.values(this.state);
    const feedbackAmount = gradeArray.reduce(
      (total, feedbackGrade) => (total += feedbackGrade),
      0,
    );

    return feedbackAmount;
  }

  countPositiveFeedbackPercentage() {
    let positiveFeedback = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );

    return positiveFeedback > 0 ? positiveFeedback : 0;
  }

  render() {
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
