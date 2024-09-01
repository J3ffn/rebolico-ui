import React from "react";
import { Link } from "react-router-dom";

import logo from "Logo2.png";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo} aria-label="Home">
      <img
        className={styles.logoImage}
        src={logo}
        alt="Logo Plyn"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
