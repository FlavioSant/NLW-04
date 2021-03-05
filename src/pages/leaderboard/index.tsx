import { NextPage } from "next";
import Head from "next/head";
import { MenuSidebar } from "../../components/MenuSidebar";
import { IoConstruct } from "react-icons/io5";

import styles from "../../styles/pages/Leaderboard.module.css";

const Leaderboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard | Move.it</title>
      </Head>
      <MenuSidebar />
      <div className={styles.content}>
        <h1>WORKING</h1>
        <IoConstruct size={100} />
      </div>
    </div>
  );
};

export default Leaderboard;
