import { NextPage } from "next";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export const Profile: NextPage = () => {
  const { level, user } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt={user.name} title={user.name} />
      <div>
        <strong>{user.name}</strong>
        <span>{user.location}</span>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
