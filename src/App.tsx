import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostsList } from './components/PostList';
import { Layout } from './pages/Layout';
import { CreatePost } from './pages/CreatePost';

export const App: React.FC = () => {
  // const [postId, setPostId] = useState(0);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <PostsList />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
