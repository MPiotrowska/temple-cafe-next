import React from 'react';
import styles from './container.module.css';

export const Container = ({
  children,
  fullWidth,
  className = '',
  alignment = 'center',
  flex = false,
  row = false,
  height = '',

  ...props
}) => {
  return (
    <div
      {...props}
      className={`wrapper wrapper-${alignment} ${className} ${
        fullWidth ? styles.fullWidth : styles.standard
      } ${flex ? styles.flex : ''} ${row ? styles.row : ''} ${
        height ? styles.height : ''
      }`}
    >
      {children}
    </div>
  );
};
