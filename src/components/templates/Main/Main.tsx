import Header from "components:organisms/Header/Header";
import React from "react";
import styles from "./Main.module.css";

type MainTemplateProps = React.PropsWithChildren;

const Main: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={styles.mainTemplate}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
