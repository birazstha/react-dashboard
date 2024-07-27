import * as yup from 'yup';

export const basicSchema = yup.object ().shape ({
  email: yup
    .string ()
    .email ('Please enter a valid email')
    .required ('Email is required'),
  contact_number: yup
    .string ()
    .matches (/^\d{10}$/, 'Contact number must be exactly 10 digits') // Regex for 10 digits
    .required ('Contact number is required'),
});
