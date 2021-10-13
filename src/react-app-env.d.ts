/// <reference types="react-scripts" />
interface Post {
    id?: number;
    userId?: number;
    title: string;
    body: string;
  }
  
  interface Comment {
    name: string;
    postId: string;
    body:string;
  }

  type RootState = {
    posts: Post[],
    post: Partial<Post> | null;
    selectedPostId: number | null,
    comments: Comment[],
    userId: number | null,
    loader: boolean,
  };
  