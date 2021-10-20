import { connect } from 'react-redux';
import { PostsList } from './PostsList';
import {
  loadPosts, setSearchValue, setSelectValue, setSelectPage, setSelectView,
} from '../../redux/actions/postActions';

const mapStateToProps = (state:RootState) => {
  return {
    posts: state.posts,
    loader: state.loader,
    query: state.query,
    select: state.select,
    page: state.page,
    view: state.view,
  };
};

export default connect(mapStateToProps, {
  loadPosts, setSearchValue, setSelectValue, setSelectPage, setSelectView,
})(PostsList);
