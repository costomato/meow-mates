import Image from "next/image";
import styles from "./index.module.css";

export const SidebarNavigation = () => {
  return (
    <nav className={styles.sidebar_nav_main}>
      <div className={styles.sidebar_nav_user}>
        <Image
          className={styles.sidebar_nav_dp_image}
          alt="dp-icon"
          src="/icons/dp.png"
          width="40"
          height="40"
        />
        <p>Sherlock</p>
      </div>
      <div className={styles.sidebar_nav_utils}>
        <div className={styles.sidebar_nav_icon_wrapper}>
          <Image alt="find-icon" src="/icons/find.svg" width="25" height="25" />
        </div>
        <div className={styles.sidebar_nav_icon_wrapper}>
          <Image alt="gift-icon" src="/icons/gift.svg" width="25" height="25" />
        </div>
        <div className={styles.sidebar_nav_icon_wrapper}>
          <Image
            alt="shield-icon"
            src="/icons/shield.svg"
            width="25"
            height="25"
          />
        </div>
      </div>
    </nav>
  );
};
