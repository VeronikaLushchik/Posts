/* eslint-disable */
import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { routes } from '../../routes';
import { useHistory } from 'react-router';
import Pagination from '@mui/material/Pagination';
import { Margin } from '@mui/icons-material';
import { Stack } from '@mui/material';

type Props = {
  posts: Post[],
  comments: Comment[],
  loader: boolean,
  loadComments: (activePostId:number) => void;
  loadPosts: () => void;
};

export const PostsList: React.FC<Props> = ({ posts, loadPosts }) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const onRowSelected = (activePostId: number | undefined) => {
    history.push(routes[2].path + `${activePostId}`)
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
    <div style={{ height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
    {currentPosts.map((post:Post) => 
        <Card sx={{ maxWidth: 370, margin: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => onRowSelected(post.id)} size="small">Read More</Button>
          </CardActions>
        </Card>
    )}
    <Stack spacing={2} justifyContent="center" m="auto">
      <Pagination size="large" count={Math.ceil(posts.length / postsPerPage)} page={currentPage} onChange={(event,val)=> setCurrentPage(val)} />
    </Stack>
    </div>
    </>
  );
};
