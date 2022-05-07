import React, { Component } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';

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
    console.log(5);
    return 5;
  }

  countPositiveFeedbackPercentage() {
    //
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
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={() => this.countTotalFeedback()}
          ></Statistics>
          {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
        </Section>
      </>
    );
  }
}

export default App;
