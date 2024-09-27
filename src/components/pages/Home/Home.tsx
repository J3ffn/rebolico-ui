import PageTemplate from "components:templates/PageTemplate/PageTemplate";
import React from "react";
import { NoticesImages } from "src/utils/mocks/notices/Notices";

// import styles from "./Home.module.css";
import PrincipalNotice from "components:molecules/PrincipalNotice/PrincipalNotice";
import OptionsPortal from "components:molecules/OptionsPortal/OptionsPortal";
import NoticesSections from "components:organisms/NoticesSections/NoticesSections";

const noticesImages = NoticesImages;

const Home: React.FC = () => {
  return (
    <PageTemplate>
      <OptionsPortal />
      <PrincipalNotice
        imageAttributes={noticesImages[0].attributes}
        imageText={noticesImages[0].text}
      />
      <NoticesSections />
    </PageTemplate>
  );
};

export default Home;
