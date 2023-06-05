import type { FC } from "react";
import classes from "./header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => (
  <div className={classes.header}>{children}</div>
);

export default Header;
