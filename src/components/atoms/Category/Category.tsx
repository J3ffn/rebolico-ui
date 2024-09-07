import React from "react";
import { Link } from "react-router-dom";

import styles from "./Category.module.css";

const Category: React.FC<{
  category: string;
  subCategories: string[];
  color: string;
  isActive: boolean;
}> = ({ category, subCategories, color, isActive }) => {
  return (
    <div className={styles.optionCategoryContainer}>
      {subCategories.map((sub, index) => (
        <Link
          key={sub + "-" + index}
          id={styles.subCategorieId}
          to={`/categories/${subCategories}`}
          style={{ color: color }}
          hidden={!isActive}
        >
          {sub}
        </Link>
      ))}
      <Link to={`/categories/${category}`} style={{ color: color }}>
        {category}
      </Link>
    </div>
  );
};

export default Category;
