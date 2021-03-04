import { NextPage } from "next";
import { FiHome, FiAward } from "react-icons/fi";

import styles from "../styles/components/MenuSidebar.module.css";

export const MenuSidebar: NextPage = () => {
  return (
    <div className={styles.menuSidebarContainer}>
      <header>
        <img src="logo-icon.svg" alt="Move.it" />
      </header>
      <main>
        <button>
          <FiHome size={40} />
        </button>
        <button>
          <FiAward size={40} />
        </button>
      </main>
    </div>
  );
};
