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
      {subCategories.map((subCategory, index) => (
        <Link
          key={subCategory + "-" + index}
          id={styles.subCategorieId}
          to={`/categories/${subCategories}`}
          style={{ color: color }}
          hidden={!isActive}
        >
          {subCategory}
        </Link>
      ))}
      <Link to={`/categories/${category}`} style={{ color: color }}>
        {category}
      </Link>
    </div>
  );
};

export default Category;
