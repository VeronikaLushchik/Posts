import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { postApi } from '../../api';

export type RootState = {
  posts: Post[],
  post: Post | null;
  selectedPostId: number,
  comments: Comment[],
  userId: number,
};

const initialState: RootState = {
  posts: [],
  post: null,
  selectedPostId: 0,
  comments: [],
  userId: 0,
};

const SET_POSTS = 'SET_POSTS';
const SET_POST = 'SET_POST';
const SET_COMMENTS = 'SET_COMMENTS';

export const setPosts = (posts: Post[]) => ({ type: SET_POSTS, posts });
export const setPost = (post: Post) => ({ type: SET_POST, post });
export const setComments = (comments: Comment[]) => ({ type: SET_COMMENTS, comments });

export const loadPosts = (
) => (dispatch: Dispatch) => {
  postApi.getPosts()
    .then((response: AxiosResponse<{}>) => {
      dispatch(setPosts(response.data as Post[]));
    });
};

export const loadComments = (postId:number) => (dispatch: Dispatch) => {
  postApi.getPostComments(postId)
    .then((response: AxiosResponse<{}>) => {
      dispatch(setComments(response.data as Comment[]));
    });
};

export const addNewPost = (post: Post)
: ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  try {
    await postApi.addPost(post);
    dispatch(setPost(post));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('-------e', e);
  }
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
