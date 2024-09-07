import PageTemplate from "components:templates/PageTemplate/PageTemplate";
import React from "react";
import { NoticesImages } from "src/utils/mocks/notices/Notices";

// import styles from "./Home.module.css";
import PrincipalNotice from "components:molecules/PrincipalNotice/PrincipalNotice";
import OptionsPortal from "components:molecules/OptionsPortal/OptionsPortal";

const noticesImages = NoticesImages;

const Home: React.FC = () => {
  return (
    <PageTemplate>
      <OptionsPortal
        options={[
          { categorie: "Projeto", subCategorie: ["teste"] },
          { categorie: "Rebuliço Stories", subCategorie: ["teste 2"] },
          { categorie: "Publicações", subCategorie: ["teste 3"] },
          { categorie: "Cultura midiática", subCategorie: ["teste 4"] },
          {
            categorie: "GeM",
            subCategorie: ["teste 5", "Teste 6"],
          },
        ]}
      />
      <PrincipalNotice
        imageAttributes={noticesImages[0].attributes}
        imageText={noticesImages[0].text}
      />
    </PageTemplate>
  );
};

export default Home;
