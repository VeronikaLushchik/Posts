/* eslint-disable */
import React from 'react';
import PostsList from './components/PostList';
import CreatePost from './pages/CreatePost';
import { PostPage } from './pages/Post/Post';

export const routes = [
  {
    page: <PostsList />,
    path: '/',
  },
  {
    page: <CreatePost />,
    path: '/create',
  },

  {
    page: <PostPage />,
    path: '/post',
  },
];
