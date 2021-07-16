import React from "react";
// import styles from "./Feedback.module.css";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleClickBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
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
    // const total = this.state.good + this.state.neutral + this.state.bad;
    // const totalPercentage = (this.state.good * 100) / total;
    return (
      <div>
        <p>Please leave feedback</p>
        <button type="button" onClick={this.handleClickGood}>
          Good
        </button>
        <button type="button" onClick={this.handleClickNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleClickBad}>
          Bad
        </button>
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
