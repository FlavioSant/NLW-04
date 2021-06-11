import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { FormEvent, useCallback, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import Cookies from "js-cookie";
import api from "../services/api";

import styles from "../styles/pages/SignIn.module.css";

export const SignIn: NextPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setHasError(false);
      setError("");

      try {
        const { data } = await api.get(`/users/${username}`);

        const { avatar_url, name, location } = data;

        Cookies.set("name", name);
        Cookies.set("avatar_url", avatar_url);
        Cookies.set("location", location);

        router.push("/home");
      } catch (err) {
        setHasError(true);
        setError("Usuário inválido, verifique seu username.");
        console.error({ err });
      }
    },
    [username]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Move.it</title>
      </Head>
      <div className={styles.backgroundContainer} />
      <div className={styles.content}>
        <img src="/logo-white.svg" alt="Move.it" title="Move.it" />
        <h1>Bem-vindo</h1>
        <div>
          <img src="icons/github.svg" alt="github" title="github" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            title="Digite seu username"
          />
          <button type="submit" title="Logar">
            <FiArrowRight size={24} />
          </button>
        </form>
        {hasError && <span>{error}</span>}
      </div>
    </div>
  );
};

export default SignIn;
