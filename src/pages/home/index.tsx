import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import { CountDownProvider } from "../../contexts/CountDownContext";
import { ChallengesProvider } from "../../contexts/ChallengesContext";

import { CompletedChallenges } from "../../components/CompletedChallenges";
import { CountDown } from "../../components/CountDown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengeBox } from "../../components/ChallengeBox";
import { MenuSidebar } from "../../components/MenuSidebar";

import styles from "../../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user: {
    name: string;
    avatar_url: string;
    location: string;
  };
}

export const Home: NextPage<HomeProps> = ({
  level,
  currentExperience,
  challengesCompleted,
  user,
}) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      user={user}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>
        <MenuSidebar />
        <div className={styles.contentContainer}>
          <ExperienceBar />
          <CountDownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <CountDown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountDownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    name,
    avatar_url,
    location,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      user: {
        name,
        avatar_url,
        location,
      },
    },
  };
};

export default Home;
