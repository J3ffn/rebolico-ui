import PageTemplate from "components:templates/PageTemplate/PageTemplate";
import React from "react";
import { NoticesImages } from "src/utils/mocks/notices/Notices";

import styles from "./Home.module.css";
import PrincipalNotice from "components:molecules/PrincipalNotice/PrincipalNotice";

const noticesImages = NoticesImages;

const Home: React.FC = () => {
  return (
    <PageTemplate>
      <h1 style={{ fontFamily: "Lato, sans-serif" }}>PRINCIPAIS</h1>
      <div className={styles.principalNoticesContainer}>
        <PrincipalNotice
          imageAttributes={noticesImages[0].attributes}
          imageText={noticesImages[0].text}
        />
        <div className={styles.segundaryNotices}>
          {noticesImages.slice(1).map((item) => (
            <PrincipalNotice
              imageAttributes={item.attributes}
              imageText={item.text}
            />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Home;
