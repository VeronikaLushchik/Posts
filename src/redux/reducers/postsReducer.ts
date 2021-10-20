/* eslint-disable */
import { AnyAction } from 'redux';
import {
  SET_POSTS,
  SET_POST,
  SET_COMMENTS,
  SET_COMMENT,
  SET_LOADER,
  SET_SEARCH_VALUE,
  SET_SELECT_VALUE,
  SET_SELECT_PAGE,
  SET_SELECT_VIEW,
} from '../types';

const initialState: RootState = {
  posts: [],
  post: null,
  comments: [],
  comment: null,
  userId: null,
  loader: true,
  query: '',
  select: '',
  page: '6',
  view: 'module'
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

    case SET_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    case SET_LOADER:
      return {
        ...state,
        loader: action.loader,
      };

    case SET_SEARCH_VALUE: {
      return {
          ...state,
          query: action.query,
      };
    }

    case SET_SELECT_VALUE: {
      return {
          ...state,
          select: action.select,
      };
    }

    case SET_SELECT_PAGE: {
      return {
          ...state,
          page: action.page,
      };
    }

    case SET_SELECT_VIEW: {
      return {
          ...state,
          view: action.view,
      };
    }

    default:
      return state;
  }
};
