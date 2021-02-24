import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Must enter a name"),
    email: yup
        .string()
        .email()
        .required("Please enter an email"),
    password: yup
        .string()
        .min(12, "minimum 12 characters")
        .required("Please enter a password"),
    tos: yup
        .boolean()
        .oneOf([true], "You must agree to TOS")
})

export default schema