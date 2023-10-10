export type Post = {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  isLiked: boolean;
  likers: {}[];
  comments: {}[];
  caption: string;
};
