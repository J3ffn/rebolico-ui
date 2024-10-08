import React from "react";

import styles from "./OptionsPortal.module.css";
import Category from "components:atoms/Category/Category";

const mockOptions = [
  { categorie: "Projeto", subCategorie: ["MOCK Subcategory"] },
  { categorie: "Rebuliço Stories", subCategorie: ["MOCK Subcategory"] },
  { categorie: "Publicações", subCategorie: ["Artigos", "TCC"] },
  { categorie: "Cultura midiática", subCategorie: ["MOCK Subcategory"] },
  {
    categorie: "GeM",
    subCategorie: ["MOCK Subcategory", "MOCK Subcategory"],
  },
];

class Color {
  constructor(public background: string, public color: string = "#FFFFFF") {}
}

const colors: Color[] = [
  new Color("#000000"),
  new Color("#FFFFFF", "#000000"),
  new Color("#E40E7E"),
  new Color("#F7A818"),
  new Color("#E95C0C"),
  new Color("#000000"),
];

const OptionsPortal: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <nav className={styles.optionsPortalContainer}>
      {mockOptions.map((item, index) => (
        <div
          key={item.categorie + "-" + index}
          className={`${styles.optionCardContainer} ${
            activeIndex === index ? styles.active : ""
          }`}
          style={{ background: colors[index].background }}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <Category
            category={item.categorie}
            subCategories={item.subCategorie}
            color={colors[index].color}
            isActive={activeIndex === index}
          />
        </div>
      ))}
    </nav>
  );
};

export default OptionsPortal;
