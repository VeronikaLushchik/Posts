import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../scss/CreatePost.scss';

type Props = {
  addNewPost: (post:Post) => void,
};

export const CreatePost: React.FC<Props> = ({ addNewPost }) => {
  const validate = Yup.object({
    title: Yup.string()
      .min(5, 'Must be 5 characters or more')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    body: Yup.string()
      .required('Required'),
  });

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
    </div>
  );
};
