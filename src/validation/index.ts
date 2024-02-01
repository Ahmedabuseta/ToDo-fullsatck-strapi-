import * as yup from "yup"

export const registerSchema = yup
  .object({
    userName: yup.string().required('userName is required').min(4,'userName must be over 4 letter'),
    email:yup.string().required('email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'invalid email'),
    password:yup.string().required('Password is required')
    .test('hasLowerCase', 'Password must contain at least one lowercase letter', value => /[a-z]/.test(value))
    .test('hasUpperCase', 'Password must contain at least one uppercase letter', value => /[A-Z]/.test(value))
    .test('hasDigit', 'Password must contain at least one digit', value => /\d/.test(value))
    .test('hasSpecialChar', 'Password must contain at least one special character (@$!%*?&)', value => /[@$!%*?&]/.test(value))
    .test('at least 8 character' ,  "Password must be at least 8 characters long.",(value) => /^.{8,}$/.test(value))
  })
  .required()

export const loginSchema = yup.
object({
  email:yup.string().required('email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'invalid email'),
  password:yup.string().required('Password is required')
  .test('hasLowerCase', 'Password must contain at least one lowercase letter', value => /[a-z]/.test(value))
  .test('hasUpperCase', 'Password must contain at least one uppercase letter', value => /[A-Z]/.test(value))
  .test('hasDigit', 'Password must contain at least one digit', value => /\d/.test(value))
  .test('hasSpecialChar', 'Password must contain at least one special character (@$!%*?&)', value => /[@$!%*?&]/.test(value))
  .test('at least 8 character' ,  "Password must be at least 8 characters long.",(value) => /^.{8,}$/.test(value))
})
.required()
