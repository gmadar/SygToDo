import type { FC } from "react";
import classes from "./avatar.module.css";

interface AvatarProps {
  name: string;
}

const Avatar: FC<AvatarProps> = ({ name }) => (
  <div className={classes.avatar}>{name[0].toUpperCase()}</div>
);

export default Avatar;
