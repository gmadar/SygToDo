import type { FC } from "react";
import classes from "./GlobalTasksStatus.module.css";

interface GlobalTasksStatusProps {
  low: number;
  medium: number;
  high: number;
}

const Indicator: FC<{ priority: string }> = ({ priority }) => (
  <div className={`${classes.indicator} ${classes[priority]}`}></div>
);

const GlobalTasksStatus: FC<GlobalTasksStatusProps> = ({
  low,
  medium,
  high,
}) => (
  <div className={classes.main}>
    <div className={classes.statusContainer}>
      <Indicator priority="high" />
      {high}
    </div>
    <div className={classes.statusContainer}>
      <Indicator priority="medium" />
      {medium}
    </div>
    <div className={classes.statusContainer}>
      <Indicator priority="low" />
      {low}
    </div>
  </div>
);

export default GlobalTasksStatus;
