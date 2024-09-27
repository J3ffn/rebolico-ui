import React from "react";

import styles from "./PrincipalNotice.module.css";
import { Link } from "react-router-dom";
import CentralizedBody from "components:organisms/CentralizedBody/CentralizedBody";

type PrincipalNoticeProps = {
  imageAttributes: React.ImgHTMLAttributes<HTMLImageElement>;
  imageText: string;
};

const PrincipalNotice: React.FC<PrincipalNoticeProps> = ({
  imageAttributes,
  imageText,
}) => {
  return (
    <CentralizedBody>
      <Link to={`/notice/${imageAttributes.id}`}>
        <div className={styles.principalNoticeContainer}>
          <img {...imageAttributes} className={styles.image} />
          <div className={styles.activeGradientOverlay}></div>
          <h1 className={styles.imageText}>{imageText}</h1>
        </div>
      </Link>
    </CentralizedBody>
  );
};

export default PrincipalNotice;
