import * as Yup from 'yup';

export const validate = Yup.object({
  title: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  body: Yup.string()
    .required('Required'),
});
