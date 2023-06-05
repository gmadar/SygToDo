import type { FC } from "react";
import classes from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => (
  <div className={classes.main}>{children}</div>
);

export default Title;
