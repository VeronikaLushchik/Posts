import { AnyAction } from 'redux';
import { SET_POSTS, SET_POST, SET_COMMENTS } from '../types';

const initialState: RootState = {
  posts: [],
  post: null,
  selectedPostId: 0,
  comments: [],
  userId: 0,
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

    default:
      return state;
  }
};
