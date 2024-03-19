import React from 'react';
import { FaBars, FaHome, FaUsers } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";
import { MdScheduleSend } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import useAdmin from '../hooks/useAdmin';


const DashboardLayout = () => {
    const [isAdmin] = useAdmin()


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <label htmlFor="my-drawer-2" className="btn  btn-active btn-ghost drawer-button lg:hidden"><FaBars></FaBars> </label>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className=" drawer-side lg:bg-[#21acb1]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  min-h-full text-xl">
                    {/* Sidebar content here */}

                    {
                        isAdmin ?
                            <>
                                <li className='text-white' ><NavLink to='/dashboard/adminhome' ><FaHome></FaHome>Admin Home</NavLink></li>
                                <li className='text-white' ><NavLink to='/dashboard/allStudents' ><PiStudent /> All Students</NavLink></li>

                                <li className='text-white'><NavLink to='/dashboard/allUsers' ><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li className='text-white' ><NavLink to='/dashboard/studentProfile' ><PiStudent /> Student Profile</NavLink></li>
                                <li className='text-white' ><NavLink to='/dashboard/classRoutine' ><MdScheduleSend /> Class Routine</NavLink></li>
                                <li className='text-white' ><NavLink to='/dashboard/books' ><IoBookSharp /> Books</NavLink></li>
                                <li className='text-white' ><NavLink to='/dashboard/paymentInfo' ><TfiMoney />Payment</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    <li className='text-white'><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;