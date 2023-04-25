import React from "react";

import classes from "./ResultsDisplay.module.css";

const ResultsDisplay = () => {
  return (
    <div className={classes["results-container"]}>
      <h2>Your Result</h2>
      <div className={classes.score}>
        <p>
          <span>76</span> of 100
        </p>
      </div>
      <div className={classes["summary-text"]}>
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these test.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;
