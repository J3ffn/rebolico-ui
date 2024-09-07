import Header from "components:organisms/Header/Header";
import React from "react";
import Body from "components:organisms/Body/Body";

import styles from "./PageTemplate.module.css";
import CentralizedBody from "components:organisms/CentralizedBody/CentralizedBody";

type MainTemplateProps = React.PropsWithChildren;

const PageTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Body>
      <Header />
      <CentralizedBody>
        <main className={styles.mainContent}>{children}</main>
      </CentralizedBody>
      {/* <Footer /> */}
    </Body>
  );
};

export default PageTemplate;
