import React from "react";
import styles from "./StoriesSection.module.css";
import image from "utils:mocks/stories/images/Ana Goveia Ministra palestra.png";

const StoriesSection = () => {
  const scrollContainerRef = React.useRef(null);

  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      container.scrollLeft += event.deltaY;
      event.stopPropagation();
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className={styles.storiesContainer}>
        <div
          onWheel={handleScroll}
          ref={scrollContainerRef}
          className={styles.content}
        >
          <div className={styles.previous_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div className={styles.stories}>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
            <div className={styles.story}>
              <img src={image} alt="" />
              <div className={styles.author}>Author</div>
            </div>
          </div>

          <div className={styles.next_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.stories_full_view}>
        <div className={styles.close_btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <div className={styles.previous_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className={styles.story}>
            <img src={image} alt="" />
            <div className={styles.author}>Author</div>
          </div>
          <div className={styles.next_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
