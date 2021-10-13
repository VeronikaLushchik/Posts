import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SET_POSTS, SET_POST, SET_COMMENTS } from '../types';

import { postApi } from '../../api';

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
