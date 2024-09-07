import React from "react";

import styles from "./PrincipalNotice.module.css";
import { Link } from "react-router-dom";

type PrincipalNoticeProps = {
  imageAttributes: React.ImgHTMLAttributes<HTMLImageElement>;
  imageText: string;
};

const PrincipalNotice: React.FC<PrincipalNoticeProps> = ({
  imageAttributes,
  imageText,
}) => {
  return (
    <Link to={`/notice/${imageAttributes.id}`}>
      <div className={styles.principalNoticeContainer}>
        <img {...imageAttributes} className={styles.image} />
        <div className={styles.activeGradientOverlay}></div>
        <h1 className={styles.imageText}>{imageText}</h1>
      </div>
    </Link>
  );
};

export default PrincipalNotice;
