import { connect } from 'react-redux';
import { PostsList } from './PostsList';
import { loadComments } from '../../redux/reducers/postsReducer';

export default connect(null, { loadComments })(PostsList);
