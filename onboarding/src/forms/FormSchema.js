import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Must enter a name"),
    email: yup
        .string()
        .email(),
    password: yup
        .string(),
    tos: yup
        .boolean()
        .oneOf([true])
})

export default schema