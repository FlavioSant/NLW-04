import { NextPage } from "next";

import styles from "../styles/components/RankCard.module.css";

interface User {
  userImg: string;
  name: string;
  level: number;
  challengesCompleted: number;
  xp: number;
  position: number;
}

interface RankCardProps {
  user: User;
}

export const RankCard: NextPage<RankCardProps> = ({ user }) => {
  return (
    <div className={styles.rankCardContainer}>
      <div className={styles.userPosition}>
        <span>{user.position}</span>
      </div>
      <div className={styles.userContent}>
        <div className={styles.userProfile}>
          <img src={user.userImg} alt={user.name} title={user.name} />
          <section>
            <h1>{user.name}</h1>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level {user.level}
            </p>
          </section>
        </div>
        <div className={styles.userInfo}>
          <p>
            <span>{user.challengesCompleted}</span> completados
          </p>
        </div>
        <div className={styles.userInfo}>
          <p>
            <span>{user.xp}</span> xp
          </p>
        </div>
      </div>
    </div>
  );
};
