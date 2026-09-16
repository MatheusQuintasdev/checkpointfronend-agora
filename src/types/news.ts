export type Comment = {
  name: string;
  text: string;
};

export type News = {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  categories: string[];
  comments: Comment[];
};
