import { NextPage } from "next";
import Head from "next/head";
import users from "../../../users.json";

import { MenuSidebar } from "../../components/MenuSidebar";
import { RankList } from "../../components/RankList";

import styles from "../../styles/pages/Leaderboard.module.css";

const Leaderboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard | Move.it</title>
      </Head>
      <MenuSidebar />
      <div className={styles.content}>
        <h1>Leaderboard</h1>
        <RankList users={users} />
      </div>
    </div>
  );
};

export default Leaderboard;
