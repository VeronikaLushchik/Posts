import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SET_COMMENTS, SET_COMMENT } from '../types';

import { postApi } from '../../api';

export const setComments = (comments: Comment[]) => ({ type: SET_COMMENTS, comments });
export const setComment = (comment: Comment) => ({ type: SET_COMMENT, comment });

export const loadComments = (postId:number) => async (dispatch: Dispatch) => {
  try {
    await postApi.getPostComments(postId)
      .then((response: AxiosResponse<{}>) => {
        dispatch(setComments(response.data as Comment[]));
      });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('-------e', e);
  }
};

export const addNewComment = (comment: Partial<Comment>)
: ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  try {
    await postApi.addComment(comment as Comment);
    dispatch(setComment(comment as Comment));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('-------e', e);
  }
};
