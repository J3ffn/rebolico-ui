import React from "react";
import styles from "./Notice.module.css";
import { Link } from "react-router-dom";
import CategoryTagNotice from "components:atoms/CategoryTagNotice/CategoryTagNotice";

export type NoticeProps = {
  title: string;
  category: string;
  href: string;
  imageUrl: string;
  date: Date;
  tagColor: string;
};

export const Notice: React.FC<NoticeProps> = ({
  href,
  category,
  imageUrl,
  title,
  date,
  tagColor,
}) => {
  return (
    <Link to={href} className={styles.noticeContainer}>
      <img src={imageUrl} alt="Imagem de notícia" />
      <CategoryTagNotice text={category} color={tagColor} />
      <div className={styles.noticeInfoContainer}>
        <h3 className={styles.noticeTitle}>{title}</h3>
        <p className={styles.noticeDate}>{date.toLocaleDateString()}</p>
      </div>
    </Link>
  );
};
