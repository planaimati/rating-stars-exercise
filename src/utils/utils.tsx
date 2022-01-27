export const generateGrayStars = (average: number, star: string) => {
  const grayStarArray = [];

  for (let i = 0; i < average; i++) {
    grayStarArray.push(<img src={star} alt="" />);
  }

  return grayStarArray;
};

export const generateYellowStars = (average: number, star: string) => {
  const yellowStarsArr = [];

  for (let i = 0; i < average; i++) {
    yellowStarsArr.push(<img src={star} alt="" />);
  }

  return yellowStarsArr;
};
