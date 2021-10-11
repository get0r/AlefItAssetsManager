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

const loginSchema = SignUpSchema;
delete loginSchema.fullName;

export {
    SignUpSchema,
    loginSchema,
};