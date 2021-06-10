import { NextPage } from "next";

import styles from "../styles/components/RankList.module.css";
import { RankCard } from "./RankCard";

interface Users {
  userImg: string;
  name: string;
  level: number;
  challengesCompleted: number;
  xp: number;
}

interface RankListProps {
  users: Users[];
}

export const RankList: NextPage<RankListProps> = ({ users }) => {
  return (
    <div className={styles.rankListContainer}>
      <section>
        <h2>POSIÇÃO</h2>
        <h2>USUÁRIO</h2>
        <h2>DESAFIOS</h2>
        <h2>EXPERIÊNCIA</h2>
      </section>
      {users &&
        users.map((user, i) => (
          <RankCard user={{ ...user, position: i + 1 }} />
        ))}
    </div>
  );
};
