import * as yup from 'yup';

export const basicSchema = yup.object ().shape ({
  name: yup.string ().required ('Name is required'),
  email: yup
    .string ()
    .email ('Please enter a valid email')
    .required ('Email is required'),
  contact_number: yup.string ().required ('Contact number is required'),
});

export const loginSchema = yup.object ().shape ({
  username: yup.string ().required ('Username is required'),
  password: yup.string ().required ('Password is required'),
});
