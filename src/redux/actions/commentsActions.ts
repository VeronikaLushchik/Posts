import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { SET_COMMENTS } from '../types';

import { postApi } from '../../api';

export const setComments = (comments: Comment[]) => ({ type: SET_COMMENTS, comments });

export const loadComments = (postId:number) => (dispatch: Dispatch) => {
  postApi.getPostComments(postId)
    .then((response: AxiosResponse<{}>) => {
      dispatch(setComments(response.data as Comment[]));
    });
};
