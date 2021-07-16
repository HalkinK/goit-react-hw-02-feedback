// import logo from './logo.svg';
// import './App.css';

import React from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (option) => () => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    const option = Object.keys(this.state);

    return (
      <div>
        <p>Please leave feedback</p>

        <FeedbackOptions options={option} onLeaveFeedback={this.handleClick} />

        <p>Statistics</p>

        <div>
          <span>Good: {this.state.good}</span> <br />
          <span>Neutral: {this.state.neutral}</span> <br />
          <span>Bad: {this.state.bad}</span> <br />
          <span>Total: {this.countTotalFeedback()}</span> <br />
          <span>
            Positive feedback:{" "}
            {Math.trunc(this.countPositiveFeedbackPercentage())} %
          </span>
        </div>
      </div>
    );
  }
}

export default App;
