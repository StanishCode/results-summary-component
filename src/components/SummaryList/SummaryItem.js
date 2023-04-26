import React from "react";
import SummaryIcons from "./SummaryIcons";
import classes from "./SummaryItem.module.css";

const SummaryItem = (props) => {
  return (
    <li className={classes[props.color]}>
      <div className={classes["summary-category"]}>
        <SummaryIcons className={classes.icon} index={props.icon} />
        <p className={classes["category-title"]}>{props.category}</p>
      </div>
      <div>
        <p className={classes["summary-score"]}>
          <span>{props.score}</span> / 100
        </p>
      </div>
    </li>
  );
};

export default SummaryItem;
