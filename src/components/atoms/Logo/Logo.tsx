import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImage from "assets:images/Logo.svg";
import logoText from "assets:images/LogoText.png";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo} style={{ gap: "8px" }}>
      <img src={logoImage} alt="Logo do site" />
      <img
        src={logoText}
        alt="Texto da logo do site"
        style={{ height: "25px", width: "104px" }}
      />
    </Link>
  );
};

export default Logo;
