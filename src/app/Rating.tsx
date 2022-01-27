import React, { FC } from "react";
import { ratingProps } from "../types/types";
import grayStar from "../images/grayStar.svg";
import yellowStar from "../images/yellowStar.svg";
import { generateYellowStars, generateGrayStars } from "../utils/utils";
import styles from "./Rating.module.css";

const Rating: FC<ratingProps> = (props) => {
  const { name, comment, rate } = props;

  const yellowStarsArr: JSX.Element[] = generateYellowStars(rate, yellowStar);
  const greyStarsArr: JSX.Element[] = generateGrayStars(5 - rate, grayStar);

  return (
    <div className={styles.ratingContainer}>
      <p className={styles.userName}>{name}</p>
      <p className={styles.comment}>{comment.slice(0, 120)}</p>
      <div className={styles.starsContainer}>
        {yellowStarsArr}
        {greyStarsArr}
      </div>
    </div>
  );
};

export default Rating;
