import type { FC } from "react";
import classes from "./buttons.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className={classes.button}>
    {children}
  </button>
);

export default Button;
