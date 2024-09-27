import React from "react";
import styles from "./CategoryTagNotice.module.css";

import hashTagIcon from "assets:images/hashtag.svg";

const CategoryTagNotice: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => {
  return (
    <p className={styles.noticeCategoryTag} style={{ backgroundColor: color }}>
      <img src={hashTagIcon} alt="Hashtag" />
      {text}
    </p>
  );
};

export default CategoryTagNotice;
