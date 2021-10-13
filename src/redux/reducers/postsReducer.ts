import { AnyAction } from 'redux';
import {
  SET_POSTS,
  SET_POST,
  SET_COMMENTS,
  SET_LOADER,
} from '../types';

const initialState: RootState = {
  posts: [],
  post: null,
  selectedPostId: null,
  comments: [],
  userId: null,
  loader: true,
};

export const postsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case SET_POST:
      return {
        ...state,
        post: action.post,
      };

    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };

    case SET_LOADER:
      return {
        ...state,
        loader: action.loader,
      };

    default:
      return state;
  }
};
