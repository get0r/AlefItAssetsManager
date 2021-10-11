import React from 'react'

const Dashboard = (props) => {
    return (
        <div>
            <div>
                <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
                    <div class="sidebarOpen ? 'block' : 'hidden'" click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
                    <div class="flex-1 flex flex-col overflow-hidden">
                        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <div class="container mx-auto px-6 py-8">
                                <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
                                <div class="flex flex-col mt-8">
                                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                        <div
                                            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
