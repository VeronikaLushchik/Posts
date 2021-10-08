<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getPosts } from '../../axios/posts';
=======
import React, { useEffect, useState, SetStateAction } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AxiosResponse } from 'axios';
import { client } from '../../api';
>>>>>>> fixes, add form

const columns = [
  { field: 'userId', headerName: 'UserID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];

export const PostsList: React.FC = () => {
  const [posts, setPosts] = useState([] as Post[]);

  useEffect(() => {
<<<<<<< HEAD
    getPosts()
      .then(response => setPosts(response.data));
=======
    client.getPosts()
      .then((response: AxiosResponse<{}>) => setPosts(response.data as SetStateAction<Post[]>));
>>>>>>> fixes, add form
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
