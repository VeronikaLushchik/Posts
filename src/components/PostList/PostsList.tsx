import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getPosts } from '../../axios/posts';
// import './PostsList.scss';

// type Props = {
//   selectedPostId: number;
//   selectPost: (postId :number) => void;
// };
const columns = [
  { field: 'userId', headerName: 'UserID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];

export const PostsList: React.FC = () => {
//   const { selectedPostId, selectPost } = props;
  const [posts, setPosts] = useState([] as Post[]);

  useEffect(() => {
    getPosts()
      .then(response => setPosts(response.data));
  }, []);

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
