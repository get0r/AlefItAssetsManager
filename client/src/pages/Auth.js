import React from 'react';
import { Link } from 'react-router-dom';

import background from '../assets/images/background.svg';
import SignIn from '../containers/SignIn';


const Auth = () => {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={ background } alt="" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Sign In </h1>
                    <SignIn />
                    <hr className="my-6 border-gray-300 w-full" />

                    <Link to="/signUp">
                        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex items-center justify-center">
                                <span className="ml-4">
                                    Setup Admin Account
                                </span>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default Auth;
