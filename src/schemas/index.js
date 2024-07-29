import * as yup from 'yup';

export const basicSchema = yup.object ().shape ({
  name: yup.string ().required ('Name is required'),
  username: yup.string ().required ('Username is required'),
  password: yup.string ().required ('Password is required'),
  confirm_password: yup
    .string ()
    .oneOf (
      [yup.ref ('password'), null],
      'Password and Confirm password must be same.'
    )
    .required ('Confirm Password is required'),
  email: yup
    .string ()
    .email ('Please enter a valid email')
    .required ('Email is required'),
  contact_number: yup
    .string ()
    .matches (/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required ('Phone number is required'),
});

export const loginSchema = yup.object ().shape ({
  username: yup.string ().required ('Username is required'),
  password: yup.string ().required ('Password is required'),
});
