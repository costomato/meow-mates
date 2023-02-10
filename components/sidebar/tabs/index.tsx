import { Dispatch, SetStateAction } from "react";
import styles from "./index.module.css";

type sidebarTabsProps = {
  selected: 0 | 1;
  setSelected: Dispatch<SetStateAction<0 | 1>>;
};

export const SidebarTabs = ({ selected, setSelected }: sidebarTabsProps) => {
  return (
    <ul className={styles.sidebar_tabs_main}>
      <li
        className={
          styles.sidebar_tabs_tab +
          (selected === 0 ? " " + styles.selected : "")
        }
        onClick={() => setSelected(0)}
      >
        Matches
      </li>
      <li
        className={
          styles.sidebar_tabs_tab +
          (selected === 1 ? " " + styles.selected : "")
        }
        onClick={() => setSelected(1)}
      >
        Messages
      </li>
    </ul>
  );
};
