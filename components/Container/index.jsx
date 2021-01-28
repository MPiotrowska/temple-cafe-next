import React from "react";
import styles from "./container.module.css";

export const Container = ({
  children,
  fullWidth,
  className = "",
  alignment = "center",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`wrapper wrapper-${alignment} ${className} ${
        fullWidth ? styles.fullWidth : styles.standard
      }`}
    >
      {children}
    </div>
  );
};
