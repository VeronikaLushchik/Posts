import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { postApi } from '../../api';

export type RootState = {
  posts: Post[],
  post: Post | null;
  selectedPostId: number,
  userId: number,
};

const initialState: RootState = {
  posts: [],
  post: null,
  selectedPostId: 0,
  userId: 0,
};

const SET_POSTS = 'SET_POSTS';
const SET_POST = 'SET_POST';

export const setPosts = (posts: Post[]) => ({ type: SET_POSTS, posts });
export const setPost = (post: Post) => ({ type: SET_POST, post });

export const loadPosts = (
) => (dispatch: Dispatch) => {
  postApi.getPosts()
    .then((response: AxiosResponse<{}>) => {
      dispatch(setPosts(response.data as Post[]));
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

    default:
      return state;
  }
};
