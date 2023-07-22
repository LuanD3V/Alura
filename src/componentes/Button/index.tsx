import "./Button.css";
import React, { ReactElement } from "react";

interface ButtonProps {
  children: ReactElement;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="button">{children}</button>;
};

export default Button;
