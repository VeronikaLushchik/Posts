/* eslint-disable */
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { CommentForm } from '../CommentForm'
import '../../scss/post.scss'

interface Props {
    post: Post,
    match: any
    comments: Comment[],
    loadComments: (activePostId:number) => void;
    loadPost: (id:number) => void;
    addNewComment: (comment: Partial<Comment>) => void;
}

const PostPage:React.FC<Props> = ({post, match, loadPost, loadComments,  addNewComment, comments}) => {
    let id = match?.params?.postId

    useEffect(() => {
        loadPost(id)
        loadComments(id)
    },[])

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
      <>
    <section>
      <article className="post">
      <Typography variant="h3" component="h2">
        {post.title}
      </Typography>
        <p className="post__text">{post.body}</p>
        <div className="post__comments">Comments</div>
        <ul className="post__comment">
        {comments.map((comment:Partial<Comment>) => 
        <div className="post__card">
            <li className="post__title">{comment.name}</li>
            <li className="post__email">
              <a className="post__email" href="#">{comment.email}</a>
            </li>
            <li className="post__body">{comment.body}</li>
        </div>)}
        </ul>
      </article>
    </section>
    <CommentForm addNewComment={addNewComment}/>
    </>
  )
}

export default PostPage;
