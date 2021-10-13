import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <div className="w-10/12 text-red-600 py-4 mx-auto font-mono">
            { message }
        </div>
    );
};

export default ErrorMessage;
