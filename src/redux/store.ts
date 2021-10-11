import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const getPostsSelector = (state: RootState) => state.posts.posts;
export const getActiveUserId = (state: RootState) => state.posts.userId;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
