import React from 'react';
import { PostsList } from './components/PostList';
import { CreatePost } from './pages/CreatePost';

export const routes = [
  {
    page: <PostsList />,
    path: '/',
  },
  {
    page: <CreatePost />,
    path: '/create',
  },
];
