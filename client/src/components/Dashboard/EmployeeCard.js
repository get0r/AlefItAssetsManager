import React from 'react';

const EmployeeCard = ({ employee }) => {
    return (
        <div class="max-w-3xl w-full mx-auto z-10">
            <div class="flex flex-col">
                <div class="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                    <div class="flex-none sm:flex">
                        <div class=" relative h-32 w-32   sm:mb-0 mb-3">
                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-32 h-32 object-cover rounded-2xl" />
                        </div>
                        <div class="flex-auto sm:ml-5 justify-evenly">
                            <div class="flex items-center justify-between sm:mt-2">
                                <div class="flex items-center">
                                    <div class="flex flex-col">
                                        <div class="w-full flex-none text-lg text-gray-800 font-bold leading-none">{`${employee.fname} ${employee.lname}`} </div>
                                        <div class="flex-auto text-gray-500 my-1">
                                            <span class="mr-3 ">{employee.jobTitle}</span><span class="mr-3 border-r border-gray-200  max-h-0"></span><span>{employee.dept}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row items-center">
                            </div>
                            <div class="flex pt-2  text-sm text-gray-500">
                                <div class="flex-1 inline-flex items-center">
                                    <p class="">Employee Id: {employee.empId}</p>
                                </div>
                                <button class="flex-no-shrink bg-red-400 hover:bg-red-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-300 hover:border-red-500 text-white rounded-full transition ease-in duration-300">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
