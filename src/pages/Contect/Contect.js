import React from 'react';
import {
    FaHome, FaPhone,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'

const Contect = () => {
    return (
        <div className='space-y-8 my-10 md:my-0' id='contact'>
            <div className='md:border-2 md:border-dashed p-4 rounded-lg'>
                <h1 className='text-3xl font-semibold mb-7 text-center border-b-2 py-2'>Find Me On</h1>
                <ul className='space-y-5'>

                    <li className='flex flex-col md:flex-row  items-center'><FaPhone className='text-2xl' /><p className='text-sm  md:text-2xl pl-3'><a href="tel:+8801314335168">+8801314335168</a></p></li>


                    <li className='flex flex-col md:flex-row  items-center'><FaEnvelope className='text-2xl' /><p className='text-sm  md:text-2xl pl-3'>summenurfatema@gmail.com</p></li>


                    <li className='flex flex-col md:flex-row  items-center'><FaFacebook className='text-2xl' /><a className='text-sm  md:text-2xl pl-3' href='https://www.facebook.com/summenurfatema'>https://www.facebook.com/summenurfatema</a></li>


                    <li className='flex flex-col md:flex-row  items-center'><FaLinkedin className='text-2xl' /><a className='text-sm  md:text-2xl pl-3' href='https://www.linkedin.com/in/summenurfatema'>https://www.linkedin.com/in/summenurfatema</a></li>


                    <li className='flex flex-col md:flex-row items-center'><FaGithub className='text-2xl' /><a className='text-sm  md:text-2xl px-3 md:pl-3' href='https://www.github.com/summenurfatema'>https://www.github.com/summenurfatema</a></li>


                    <li className='flex flex-col md:flex-row   items-center'><FaHome className='text-2xl' /><a href='https://www.google.com/maps/place/Hathazari/@22.5107529,91.7872722,13.68z/data=!4m5!3m4!1s0x30acd66e0fc1fe75:0x1a5fa83776c97924!8m2!3d22.5084634!4d91.8074586' className='text-sm md:text-2xl md:pl-3'>Chittagong, Bangladesh.</a></li>

                </ul>
            </div>
            <div className="divider">OR</div>

            <div className='border-2 border-dashed p-4 rounded-lg'>


                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Contact with me !</h1>
                    </div>

                    <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="name" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email address"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="phone" className="sr-only">Phone Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter phone number"
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">

                                </span>
                            </div>
                        </div>
                        <textarea className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"' placeholder='Type your message' cols={59} rows={3}></textarea>

                        <div className="flex items-center">


                            <button
                                type="submit"
                                className=" rounded-lg bg-blue-500 px-5 py-3 font-medium text-white"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contect;