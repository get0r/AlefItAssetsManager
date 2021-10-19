import React from 'react'
import { ErrorMessage, Field, Form } from 'formik';

const CustomForm = ({ fields, submitBtn }) => {
    let key = 0;

    const generateFields = () => {
        return fields.map(field => {
            if (field.type === 'select') {
                return (
                    <div key={ key++ }>
                        <label className="block text-gray-700">{ field.label }</label>
                        <Field
                            as="select"
                            name={ field.name }
                            value={ field.value }
                            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                                {
                                    field.options.map(option => (
                                        <option key={option._id} value={option._id}>{option.name}</option>
                                    ))
                                }
                        </Field>
                        <div className="text-red-600 font-serif p-2">
                            <ErrorMessage name={ field.name } />
                        </div>
                    </div>
                );
            }

            return (
                <div key={ key++ }>
                    <label className="block text-gray-700">{ field.label }</label>
                    <Field type={ field.type } name={ field.name } value={ field.value } placeholder={ field.placeholder } className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" />
                    <div className="text-red-600 font-serif p-2">
                        <ErrorMessage name={ field.name } />
                    </div>
                </div>
            );
        });
    };

    return (
        <Form>
            { generateFields() }
            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">{ submitBtn }</button>
        </Form>
    );
};


export default CustomForm;