import { connect } from 'react-redux';
import { CreatePost } from './CreatePost';
import { addNewPost } from '../../redux/reducers/postsReducer';

export default connect(null, { addNewPost })(CreatePost);
