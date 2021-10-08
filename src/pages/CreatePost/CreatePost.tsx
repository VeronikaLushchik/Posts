import React, { SetStateAction, useState } from 'react';
import { Formik } from 'formik';
import { AxiosResponse } from 'axios';
import { client } from '../../api';
import '../../scss/CreatePost.scss';

type Values = {
  title?: string,
  body?: string,
};

export const CreatePost: React.FC = () => {
  const [posts, setPosts] = useState([] as Post[]);
  const addNewPost = (newPost: Partial<Post>) => {
    client.addPost(newPost as Post)
      .then(() => client.getPosts())
      .then((response: AxiosResponse<{}>) => setPosts(response.data as SetStateAction<Post[]>));
  };

  return (
    <div className="create">
      <h1 className="create__title">Create a post</h1>
      <Formik
        initialValues={{ title: '', body: '' }}
        validate={values => {
          const errors: Values = {};

          if (!values.title) {
            errors.title = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          addNewPost(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="create__form">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className="create__input"
            />
            {errors.title && touched.title && errors.title}
            <input
              type="text"
              name="body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              className="create__input"
            />
            {errors.body && touched.body && errors.body}
            <button
              type="submit"
              disabled={isSubmitting}
              className="create__button"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <h6>{posts.length}</h6>
    </div>
  );
};
