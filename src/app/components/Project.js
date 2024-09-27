import Image from 'next/image';
import React from 'react';

const Project = () => {
    return (
        <div id="Project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            My Projects
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {/* Project 1 */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image 
                                    alt="MarkSheet Project" 
                                    className="absolute inset-0 w-full h-full object-cover object-center" 
                                    src="/public/assest/marksheet - Copy.jpg" 
                                    layout="fill"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Console MarkSheet
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        MarkSheet
                                    </h1>
                                    <p className="leading-relaxed">
                                        I have completed my marksheet project. It was a challenging but rewarding experience. Excited to showcase my work and learn from feedback!
                                    </p>
                                    <p className="leading-relaxed">View Project</p>
                                </div>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image 
                                    alt="Student Management System Project" 
                                    className="absolute inset-0 w-full h-full object-cover object-center" 
                                    src="/public/assest/std Mange.png" 
                                    layout="fill"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Student Management System
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Student Management System
                                    </h1>
                                    <p className="leading-relaxed">
                                        Efficiently manages student records, grades, and attendance. Streamlines student data management for educational institutions.
                                    </p>
                                    <p className="leading-relaxed">View Project</p>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image 
                                    alt="All Projects" 
                                    className="absolute inset-0 w-full h-full object-cover object-center" 
                                    src="/public/assest/all.png"
                                    layout="fill"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        My All Projects
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        All Projects
                                    </h1>
                                    <p className="leading-relaxed">
                                        I have done all my projects. It's been a great experience, and I have completed my 12th project in my project collection, including calculator and ATM machine projects.
                                    </p>
                                    <p className="leading-relaxed">View Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
