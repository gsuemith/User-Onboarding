import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Must enter a name"),
    email: yup
        .string()
        .email()
        .notOneOf(["g@s.com"], "That email is already taken")
        .required("Please enter an email"),
    password: yup
        .string()
        .min(12, "minimum 12 characters")
        .required("Please enter a password"),
    // password2: yup
    //     .string()
    //     .required()
    //     // .test('passwords-match', 'Passwords must match', value => {
    //     //     console.log(yup.ref('password'))       
    //     //     return yup.ref('password') === value     
    //     // })
    //     ,
    role: yup
        .string()
        .oneOf(['member', 'fan', 'superfan', 'sponsor', 'patron'])
        .required("Please choose a role"),
    age: yup
        .string()
        .oneOf(['minor', 'adult', 'senior']),
    tos: yup
        .boolean()
        .oneOf([true], "You must agree to TOS")
})

export default schema