import Header from "components:organisms/Header/Header";
import React from "react";
import Body from "components:organisms/Body/Body";

import styles from "./PageTemplate.module.css";

type MainTemplateProps = React.PropsWithChildren;

const PageTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Body>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      {/* <Footer /> */}
    </Body>
  );
};

export default PageTemplate;
