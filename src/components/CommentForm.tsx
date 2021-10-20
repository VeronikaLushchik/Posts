import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Button, TextField } from '@mui/material';
import { validateComment } from '../validate';

type Props = {
  addNewComment: (comment:Partial<Comment>) => void,
};

export const CommentForm: React.FC<Props> = ({ addNewComment }) => {
  return (
    <div className="create">
      <h1 className="create__title">Add a comment</h1>
      <Formik
        initialValues={{ name: '', body: '', email: '' }}
        validationSchema={validateComment}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addNewComment(values);
          setSubmitting(false);
          resetForm();
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
              placeholder="Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="create__input"
              helperText={<ErrorMessage name="name" />}
            />
            <TextField
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="create__input"
              helperText={<ErrorMessage name="email" />}
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
