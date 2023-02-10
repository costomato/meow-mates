import { useState } from "react";
import styles from "./index.module.css";
import { SidebarNavigation } from "./navigation";
import { SidebarTabs } from "./tabs";

export const Sidebar = () => {
  const [selected, setSelected] = useState<0 | 1>(0);

  return (
    <div className={styles.sidebar_main}>
      <SidebarNavigation />
      <SidebarTabs selected={selected} setSelected={setSelected} />
    </div>
  );
};
