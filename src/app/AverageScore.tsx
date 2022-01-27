import React, { FC } from "react";
import { ratingListProps } from "../types/types";
import grayStar from "../images/grayStar.svg";
import yellowStar from "../images/yellowStar.svg";
import { generateYellowStars, generateGrayStars } from "../utils/utils";
import styles from "./AverageScore.module.css";

const AverageScore: FC<ratingListProps> = ({ ratings }) => {
  const averageRating = parseFloat(
    (
      ratings.reduce((accumulator, current) => accumulator + current.score, 0) /
      ratings.length
    ).toFixed()
  );

  const yellowStarsArr: JSX.Element[] = generateYellowStars(
    averageRating,
    yellowStar
  );
  const greyStarsArr: JSX.Element[] = generateGrayStars(
    5 - averageRating,
    grayStar
  );

  return (
    <div className={styles.averageScoreContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Średnia ocen</p>
      </div>
      <div className={styles.starsContainer}>
        {yellowStarsArr}
        {greyStarsArr}
      </div>
    </div>
  );
};

export default AverageScore;
