import { ErrorMessage, Field, Form, withFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const RegisterAdmin = (props) => {
    return (
        <section class="flex flex-col md:flex-row h-screen items-center">

            <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12flex items-center justify-center">
                <div class="w-full h-100">
                    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Setup Admin Account</h1>
                    <Form class="mt-6">
                        <div>
                            <label class="block text-gray-700">Full Name</label>
                            <Field type="text" name="fullName" placeholder="Ex. Abebe Kebede" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete   />
                            <div className="text-red-600 p-1 font-mono">
                                <ErrorMessage name="fullName" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-gray-700">Username</label>
                            <Field type="text" name="username" id="" placeholder="Ex. admin" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete   />
                            <div className="text-red-600 p-1 font-mono">
                                <ErrorMessage name="username" className="text-red" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <label class="block text-gray-700">Password</label>
                            <Field type="password" name="password" id="" placeholder="Enter Password" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"   />
                            <div className="text-red-600 p-1 font-mono">
                                <ErrorMessage name="password" className="text-red" />
                            </div>
                        </div>

                        <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Setup Admin Account</button>
                    </Form>

                    <hr class="my-6 border-gray-300 w-full" />

                    <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div class="flex items-center justify-center">
                            <span class="ml-4">
                                Login
                            </span>
                        </div>
                    </button>

                </div>
            </div>

            <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                {/* <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover" /> */ }

            </div>

        </section>
    );
};

const LoginValidation = yup.object().shape({
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
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
        .required(),
})

export default withFormik({
    // Handles our submission
    handleSubmit: (values, { setSubmitting }) => {
        // This is where you could send the submitted values to the backend
        console.log("Submitted Email:", values.email)
        console.log("Submitted Password:", values.password)
        // Simulates the delay of a real request
        setTimeout(() => setSubmitting(false), 3 * 1000)
    },
    validationSchema: LoginValidation,
})(RegisterAdmin)