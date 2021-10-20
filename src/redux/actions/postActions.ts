/* eslint-disable */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SET_POSTS, SET_POST, SET_LOADER, SET_SEARCH_VALUE, SET_SELECT_VALUE, SET_SELECT_PAGE, SET_SELECT_VIEW } from '../types';

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

export const loadPost = (id:number
  ) => async (dispatch: Dispatch) => {
    try {
      await postApi.getPost(id)
        .then((response: AxiosResponse<{}>) => {
          dispatch(setPost(response.data as Post));
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

export const setSearchValue = (query:string) => (dispatch:Dispatch) => {
  dispatch({
    type: SET_SEARCH_VALUE,
    query: query,
  });
};

export const setSelectValue = (select:string) => (dispatch:Dispatch) => {
  dispatch({
    type: SET_SELECT_VALUE,
    select: select,
  });
};

export const setSelectPage = (page:string) => (dispatch:Dispatch) => {
  dispatch({
    type: SET_SELECT_PAGE,
    page: page,
  });
};

export const setSelectView = (view:string) => (dispatch:Dispatch) => {
  dispatch({
    type: SET_SELECT_VIEW,
    view: view,
  });
};
