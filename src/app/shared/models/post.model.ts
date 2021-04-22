export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  imageUrl: string;
  createdDate: string;
  comments: Comment[];
  topics: string[];
  rating: number;
}

export class Comment {
  id: number;
  postId: number;
  body: string;
}
