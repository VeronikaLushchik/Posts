import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

type Method = 'get' | 'post' | 'delete';

const makeRequest = (method:Method, url:string, params:{}) => {
  return instance[method](`${url}`, params);
};

const request = (method:Method, url:string) => {
  return (params = {}) => makeRequest(method, url, params);
};

export const client = {
  removePost: (postId:number) => request('delete', `/posts/${postId}`)(),
  getPosts: request('get', '/posts'),
  addPost: (newPost: Post) => request('post', '/posts')(newPost),
};
