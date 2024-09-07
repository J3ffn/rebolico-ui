import React from "react";
import styles from "./Body.module.css";

type BodyProps = {
  attributes?: React.ButtonHTMLAttributes<HTMLBodyElement>;
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ attributes, children }) => {
  return (
    <main className={styles.body} {...attributes}>
      {children}
    </main>
  );
};

export default Body;
