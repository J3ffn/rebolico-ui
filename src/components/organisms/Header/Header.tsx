import React from "react";
import styles from "./Header.module.css";
import Logo from "components:atoms/Logo";
import User from "src/components/molecules/User/User";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent} data-relation="centralized">
        <Logo />
        <User />
      </div>
    </header>
  );
};

export default Header;
