import { NextPage } from "next";
import { FiArrowRight } from "react-icons/fi";

import styles from "../styles/pages/SignIn.module.css";

export const SignIn: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer} />
      <div className={styles.content}>
        <img src="/logo-white.svg" alt="Move.it" />
        <h1>Bem-vindo</h1>
        <div>
          <img src="icons/github.svg" alt="github" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Digite seu username"
          />
          <button type="submit">
            <FiArrowRight size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
