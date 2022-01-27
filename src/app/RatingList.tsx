import { ifError } from "assert";
import React, { FC } from "react";
import { ratingListProps } from "../types/types";
import AverageScore from "./AverageScore";
import Rating from "./Rating";

const RatingList: FC<ratingListProps> = ({ ratings }: ratingListProps) => {
  console.log(ratings);

  return (
    <>
      <AverageScore ratings={ratings} />
      {ratings.map((item) => {
        return (
          <Rating
            key={item.recordId}
            name={item.name}
            rate={item.score}
            comment={item.content}
            
          />
        );
      })}
    </>
  );
};

export default RatingList;
