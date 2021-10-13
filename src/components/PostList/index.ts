import { connect } from 'react-redux';
import { PostsList } from './PostsList';
import { loadComments, loadPosts } from '../../redux/actions/postActions';

export default connect(null, { loadComments, loadPosts })(PostsList);
