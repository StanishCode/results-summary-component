import React from "react";
import SummaryItem from "./SummaryItem";
import Button from "../UI/Button";
import classes from "./SummaryList.module.css";

const SummaryList = () => {
  const items = [
    {
      category: "Reaction",
      score: 80,
      icon: 0,
      color: "red",
    },
    {
      category: "Memory",
      score: 92,
      icon: 1,
      color: "orange",
    },
    {
      category: "Verbal",
      score: 61,
      icon: 2,
      color: "green",
    },
    {
      category: "Visual",
      score: 72,
      icon: 3,
      color: "blue",
    },
  ];

  const listItems = items.map((item) => (
    <SummaryItem
      key={item.color}
      icon={item.icon}
      category={item.category}
      score={item.score}
      color={item.color}
    />
  ));

  return (
    <div className={classes["list-container"]}>
      <h2>Summary</h2>
      <ul>{listItems}</ul>
      <Button className={classes["summary-button"]}>Continue</Button>
    </div>
  );
};

export default SummaryList;
