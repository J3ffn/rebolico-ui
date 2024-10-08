import NoticeSection from "components:organisms/NoticeSection/NoticeSection";

import styles from "./noticesSections.module.css";
import StoriesSection from "components:organisms/StoriesSection/StoriesSection";

const urlMocked =
  "https://www.mpba.mp.br/sites/default/files/area/cecom/2024/inicio.jpeg";

const NoticesSections = () => {
  return (
    <div className={styles.noticesSectionsContainer}>
      <NoticeSection
        notices={[
          {
            tagColor: "#F7A818",
            category: "Notice",
            date: new Date(Date.now()),
            href: "noticia-1",
            imageUrl: urlMocked,
            title:
              "MPBA e TRT5 firmam acordo para intercâmbio de conhecimentos, dados e soluções",
          },
          {
            tagColor: "#F7A818",
            category: "Notice",
            date: new Date(Date.now()),
            href: "noticia-1",
            imageUrl: urlMocked,
            title:
              "MPBA e TRT5 firmam acordo para intercâmbio de conhecimentos, dados e soluções",
          },
          {
            tagColor: "#F7A818",
            category: "Notice",
            date: new Date(Date.now()),
            href: "noticia-1",
            imageUrl: urlMocked,
            title:
              "MPBA e TRT5 firmam acordo para intercâmbio de conhecimentos, dados e soluções",
          },
          {
            tagColor: "#F7A818",
            category: "Notice",
            date: new Date(Date.now()),
            href: "noticia-1",
            imageUrl: urlMocked,
            title:
              "MPBA e TRT5 firmam acordo para intercâmbio de conhecimentos, dados e soluções",
          },
          {
            tagColor: "#F7A818",
            category: "Notice",
            date: new Date(Date.now()),
            href: "noticia-1",
            imageUrl: urlMocked,
            title:
              "MPBA e TRT5 firmam acordo para intercâmbio de conhecimentos, dados e soluções",
          },
          {
            tagColor: "#F7A818",
            category: "Notice",
            date: new Date(Date.now()),
            href: "noticia-1",
            imageUrl: urlMocked,
            title:
              "MPBA e TRT5 firmam acordo para intercâmbio de conhecimentos, dados e soluções",
          },
        ]}
        titleInfo={{ text: "Reportagens", href: "Reportagens-section" }}
      />
      <StoriesSection />
    </div>
  );
};

export default NoticesSections;
