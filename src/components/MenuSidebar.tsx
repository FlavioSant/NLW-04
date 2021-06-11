import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import { FiHome, FiAward, FiLogOut } from "react-icons/fi";

import styles from "../styles/components/MenuSidebar.module.css";

export const MenuSidebar: NextPage = () => {
  const router = useRouter();

  const handleClick = useCallback((path: string) => {
    router.push(path);
  }, []);

  return (
    <div className={styles.menuSidebarContainer}>
      <header onClick={() => handleClick("/home")}>
        <img src="logo-icon.svg" alt="Move.it" title="Move.it" />
      </header>
      <aside>
        <button
          type="button"
          title="Início"
          onClick={() => handleClick("/home")}
        >
          <FiHome size={40} />
        </button>
        <button
          type="button"
          title="Leaderboard"
          onClick={() => handleClick("/leaderboard")}
        >
          <FiAward size={40} />
        </button>
      </aside>
      <footer>
        <button type="button" title="Sair" onClick={() => handleClick("/")}>
          Sair <FiLogOut size={24} />
        </button>
      </footer>
    </div>
  );
};
