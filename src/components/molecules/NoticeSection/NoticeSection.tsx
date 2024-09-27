import React from "react";
import { Notice, NoticeProps } from "components:pages/Notice/Notice";
import { Link } from "react-router-dom";

import styles from "./NoticeSection.module.css";
import CentralizedBody from "components:organisms/CentralizedBody/CentralizedBody";

import chevronRightBlue from "assets:images/chevron-right-blue.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type NoticeSectionProps = {
  titleInfo: {
    text: string;
    href: string;
  };
  notices: NoticeProps[];
};

const NoticeSection: React.FC<NoticeSectionProps> = ({
  titleInfo,
  notices,
}) => {
  return (
    <section className={styles.noticesSectionsContainer}>
      <CentralizedBody>
        <Link to={`/notice/${titleInfo.href}`} className={styles.titleSection}>
          <h2>{titleInfo.text}</h2>
          <img src={chevronRightBlue} alt="Chevron" />
        </Link>
        <div className={styles.noticesContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              580: {
                slidesPerView: 2,
              },
              875: {
                slidesPerView: 3,
              },
              1140: {
                slidesPerView: 4,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="slider"
          >
            {notices.map((notice, index) => {
              return (
                <SwiperSlide key={index}>
                  <Notice {...notice} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </CentralizedBody>
    </section>
  );
};

export default NoticeSection;
