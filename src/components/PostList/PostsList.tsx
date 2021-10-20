/* eslint-disable */
import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Pagination from '@mui/material/Pagination';
import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom'
import {Header} from '../Header/Header';
import CreatePost from '../../pages/CreatePost';

type Props = {
  posts: Post[],
  loader: boolean,
  loadPosts: () => void;
  query: string;
  setSearchValue: (q: string) => void;
  select: string;
  setSelectValue: (s: string) => void;
  page: string;
  setSelectPage: (p: string) => void;
  view: string;
  setSelectView: (v: string) => void;
};

function sortPosts(posts: Post[], select:string) {
  return posts.sort((a: any, b: any) => {
    switch (select) {
      case 'ASC':
        return a.title.localeCompare(b.title)
      case 'DESC':
        return b.title.localeCompare(a.title)
      default:
        return;
    }
  })
}

let maxWidth: number;

export const PostsList: React.FC<Props> = ({ page, setSelectPage, setSelectValue, select, setSearchValue, query, posts, loadPosts, view, setSelectView }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [toggler, setToggler] = useState(false);

  const [displayedList, setDisplayedList] = useState<Post[]>([])
  
  const indexOfLastPost = currentPage * +page;
  const indexOfFirstPost = indexOfLastPost - +page;

  const handleChange = () => {
    setToggler(!toggler);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  
  useEffect(() => {
    if (view === 'list') {
      maxWidth = 540;
    } else {
      maxWidth = 370;
    }
    setDisplayedList(posts.slice(indexOfFirstPost, indexOfLastPost))
  }, [posts, currentPage, page, view])

  useEffect(() => {
    if(query.trim()){
      setDisplayedList(sortPosts(posts.slice(indexOfFirstPost, indexOfLastPost).filter(post => post.title.includes(query)), select))
    }else {
      setDisplayedList(sortPosts(posts.slice(indexOfFirstPost, indexOfLastPost), select))
    }
  }, [query, select]);

  return (
    <>
    <div style={{ height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <Box sx={{ '& button': { m: 1 } }}>
    <Header setSearchValue={setSearchValue} query={query} select={select} setSelectValue={setSelectValue} setSelectPage={setSelectPage} page={page} setSelectView={setSelectView} view={view} />
    <Button variant="outlined" size="large" onClick={handleChange}>
        Create a post
    </Button>
    {toggler && 
      <CreatePost />
    }
    </Box>
    {displayedList.map((post:Post) => 
        <Card key={post.id} sx={{ maxWidth: {maxWidth}, margin: '10px' }} className="cards">
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/posts/${post.id}`} >
            Read more
            </Link>
          </CardActions>
        </Card>
    )}
    <Stack spacing={2} m="auto" className="pagination">
      {!query ? <Pagination size="large" count={Math.ceil(posts.length / +page)} page={currentPage} onChange={(event,val)=> setCurrentPage(val)} />
      : <Pagination size="large" count={Math.ceil(displayedList.length / +page)} page={currentPage} onChange={(event,val)=> setCurrentPage(val)} />}
    </Stack>
    </div>
    </>
  );
};
