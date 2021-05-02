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
  sortOrder: number;
}

export class Comment {
  id: number;
  postId: number;
  userId: number;
  body: string;
}

export class PostFormData {
  title: string;
  body: string;
  imageUrl: number;
  topics: string;
}
