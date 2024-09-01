import React from "react";

import styles from "./PrincipalNotice.module.css";

type PrincipalNoticeProps = {
  imageAttributes: React.ImgHTMLAttributes<HTMLImageElement>;
  imageText: string;
};

const PrincipalNotice: React.FC<PrincipalNoticeProps> = ({
  imageAttributes,
  imageText,
}) => {
  return (
    <div className={styles.principalNoticeContainer}>
      <img {...imageAttributes} className={styles.image} />
      <div className={styles.gradientOverlay}></div>
      <h2 className={styles.imageText}>{imageText}</h2>
    </div>
  );
};

export default PrincipalNotice;
