export type ratingType = {
  content: string;
  name: string;
  score: number;
  recordId: string;
};

export interface ratingListProps {
  ratings: ratingType[];
}


export interface ratingProps{
  name: string;
  rate: number;
  comment: string;
  
}


