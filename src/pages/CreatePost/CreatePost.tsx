import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';
import { validate } from '../../validate';
import '../../scss/CreatePost.scss';

type Props = {
  addNewPost: (post:Post) => void,
};

export const CreatePost: React.FC<Props> = ({ addNewPost }) => {
  return (
    <div className="create">
      <h1 className="create__title">Create a post</h1>
      <Formik
        initialValues={{ title: '', body: '' }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          addNewPost(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className="create__form">
            <TextField
              placeholder="Title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className="create__input"
              helperText={<ErrorMessage name="title" />}
            />
            <TextField
              placeholder="Text"
              name="body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              className="create__input"
              helperText={<ErrorMessage name="body" />}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="create__button"
              variant="contained"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
