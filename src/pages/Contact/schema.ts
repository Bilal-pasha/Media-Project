import * as yup from 'yup';
const ContactUsSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Alphabets and spaces only')
    .max(100, 'Maximum Limit Reached'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Alphabets and spaces only')
    .max(100, 'Maximum Limit Reached'),
  email: yup.string().required('Email is required').email('Invalid Email'),
  message: yup.string().required('Message is required'),
});
export { ContactUsSchema };
