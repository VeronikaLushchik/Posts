/// <reference types="react-scripts" />
interface Post {
    id?: number;
    userId?: number;
    title: string;
    body: string;
  }
  
  interface Comment {
    name: string;
    postId?: string;
    email: string;
    body:string;
  }

  type RootState = {
    posts: Post[],
    post: Partial<Post> | null;
    comments: Comment[],
    comment: Partial<Comment> | null,
    userId: number | null,
    loader: boolean,
    query: string,
    select: string,
    page: string,
    view: string,
  };
  