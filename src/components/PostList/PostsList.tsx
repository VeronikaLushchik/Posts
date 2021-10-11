import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsSelector } from '../../redux/store';
import { loadPosts } from '../../redux/reducers/postsReducer';

const columns = [
  { field: 'userId', headerName: 'UserID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];

export const PostsList: React.FC = () => {
  const posts: Post[] = useSelector(getPostsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div style={{ height: 840, width: '100%' }}>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={14}
      />
    </div>
  );
};
