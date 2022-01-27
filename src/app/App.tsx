import React, {FC} from "react";
import RatingList from "./RatingList";
import ratings from "../data/ratings.json";
import styles from './App.module.css'

const App: FC = () => {
  return (
    <div className={styles.container}>
      <RatingList ratings={ratings.ratings}></RatingList>
    </div>
  );
};

export default App;
