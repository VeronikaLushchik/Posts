import { instance } from './axios';

export const getPosts = async () => {
  return instance('/posts');
};
