import React from "react";
import styles from "./User.module.css";
import defaultImage from "assets:images/User_icon.svg";

const User = () => {
  const [userImage, setUserImage] = React.useState(
    //   () => {
    //   fetch("", {}).then();
    // }
    "https://static.crunchyroll.com/assets/avatar/170x170/1044-jujutsu-kaisen-satoru-gojo.png"
  );

  return (
    <div className={styles.userIcon}>
      <img
        className={styles.userImage}
        src={userImage ? userImage : defaultImage}
        alt=""
      />
    </div>
  );
};

export default User;
