import React from "react";
import styles from "./Header.module.css";
import Logo from "components:atoms/Logo";
import User from "src/components/molecules/User/User";
import CentralizedBody from "components:organisms/CentralizedBody/CentralizedBody";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <CentralizedBody>
        <div className={styles.headerContent}>
          <Logo />
          <User />
        </div>
      </CentralizedBody>
    </header>
  );
};

export default Header;
