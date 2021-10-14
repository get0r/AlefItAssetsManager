import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
    fullName: yup
        .string()
        .required(),

    username: yup
        .string()
        .min(3)
        .max(5)
        .required(),

    password: yup
        .string()
        .min(8)
        .max(16)
        .required(),
});

const employeeSchema = yup.object().shape({
    fname: yup
        .string()
        .required(),

    lname: yup
        .string()
        .required(),

    jobTitle: yup
        .string()
        .required(),

    empId: yup
        .string()
        .required(),
});

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .min(3)
        .max(5)
        .required(),

    password: yup
        .string()
        .min(8)
        .max(16)
        .required(),
});

const itemSchema = yup.object().shape({
    name: yup
        .string()
        .required(),
});


export {
    SignUpSchema,
    loginSchema,
    itemSchema,
    employeeSchema,
};