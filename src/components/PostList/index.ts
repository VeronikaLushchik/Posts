/* eslint-disable */
import { connect } from 'react-redux';
import { PostsList } from './PostsList';
import {
  loadPosts, setSearchValue, setSelectValue, setSelectPage, setSelectView, setFavoriteList,
} from '../../redux/actions/postActions';

const mapStateToProps = (state:RootState) => {
  return {
    posts: state.posts,
    query: state.query,
    select: state.select,
    page: state.page,
    view: state.view,
    favorite: state.favorite,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {
  loadPosts, setSearchValue, setSelectValue, setSelectPage, setSelectView, setFavoriteList,
})(PostsList);
