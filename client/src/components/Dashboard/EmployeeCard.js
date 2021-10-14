import React from 'react';

import avatar from '../../assets/images/avatar_male.jpg'

const EmployeeCard = ({ employee, onDelete }) => {

    return (
        <div className="max-w-3xl w-full mx-auto z-auto">
            <div className="flex flex-col">
                <div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                    <div className="flex-none sm:flex">
                        <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                            <img src={avatar} alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />
                        </div>
                        <div className="flex-auto sm:ml-5 justify-evenly">
                            <div className="flex items-center justify-between sm:mt-2">
                                <div className="flex items-center">
                                    <div className="flex flex-col">
                                        <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">{`${employee.fname} ${employee.lname}`} </div>
                                        <div className="flex-auto text-gray-500 my-1">
                                            <span className="mr-3 ">{employee.jobTitle}</span><span className="mr-3 border-r border-gray-200  max-h-0"></span><span>{employee.dept}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                            </div>
                            <div className="flex pt-2  text-sm text-gray-500">
                                <div className="flex-1 inline-flex items-center">
                                    <p className="">Employee Id: {employee.empId}</p>
                                </div>
                                <button className="flex-no-shrink bg-red-400 hover:bg-red-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300"
                                    onClick={() => onDelete(employee.empId)}>DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
