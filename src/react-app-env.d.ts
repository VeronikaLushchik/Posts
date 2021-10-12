/// <reference types="react-scripts" />
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  interface Comment {
    name: string;
    postId: string;
    body:string;
  }