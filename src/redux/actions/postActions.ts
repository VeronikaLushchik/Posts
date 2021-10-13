import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SET_POSTS, SET_POST, SET_LOADER } from '../types';

import { postApi } from '../../api';

export const setPosts = (posts: Post[]) => ({ type: SET_POSTS, posts });
export const setPost = (post: Post) => ({ type: SET_POST, post });
export const setLoader = (loader: boolean) => ({ type: SET_LOADER, loader });

export const loadPosts = (
) => async (dispatch: Dispatch) => {
  try {
    await postApi.getPosts()
      .then((response: AxiosResponse<{}>) => {
        dispatch(setPosts(response.data as Post[]));
      });
    dispatch(setLoader(false));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('-------e', e);
  }
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
