/* eslint-disable */
import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getCommentsSelector, getPostsSelector } from '../../redux/store';

const columns = [
  { field: 'userId', headerName: 'UserID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];

type Props = {
  loadComments: (activePostId:number) => void;
  loadPosts: () => void;
};

export const PostsList: React.FC<Props> = ({ loadComments, loadPosts }) => {
  const posts: Post[] = useSelector(getPostsSelector);
  const comments: Comment[] = useSelector(getCommentsSelector);
  let activePostId = 0;

  const onRowSelected = (e:any) => {
    activePostId = e[0];
    loadComments(activePostId);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    loadComments(activePostId);
  }, [activePostId]);

  return (
    <div style={{ height: 840, width: '100%' }}>
      <CardContent>
        {comments.length > 0 && 
        <Typography variant="h5" component="div">
          Comments:
        </Typography>
        }
        {comments.map((comment:Comment) => 
        <>
        <Typography variant="subtitle1" component="div" key={comment.name}>
          {comment.name}
        </Typography>
        <Typography variant="caption" component="div" key={comment.body}>
          {comment.body}
        </Typography>
        </>)}
      </CardContent>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={14}
        onSelectionModelChange={onRowSelected}
      />
    </div>
  );
};
