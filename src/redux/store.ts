import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postsReducer';

const rootReducer = combineReducers({
  comments: postsReducer,
  posts: postsReducer,
  post: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const getPostsSelector = (state: RootState) => state.posts.posts;
export const getPost = (state: RootState) => state.post.post;
export const getCommentsSelector = (state: RootState) => state.post.comments;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
