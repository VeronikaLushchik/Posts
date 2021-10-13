import { connect } from 'react-redux';
import { PostsList } from './PostsList';
import { loadPosts } from '../../redux/actions/postActions';
import { loadComments } from '../../redux/actions/commentsActions';

const mapStateToProps = (state:RootState) => {
  return {
    posts: state.posts,
    comments: state.comments,
    loader: state.loader,
  };
};

export default connect(mapStateToProps, { loadComments, loadPosts })(PostsList);
