import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo/logo.png'
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    const navItem = <>
        <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1] hover:rounded-box '><Link>Home</Link></li>
        <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1] hover:rounded-box '><Link to='/admission'>Admission</Link></li>
        <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1]  hover:rounded-box'><Link to='/academic'>Academic</Link></li>

        <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1] hover:rounded-box '><Link to='/about'>About</Link></li>
        <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1]  hover:rounded-box'><Link to='/faculty'>Faculty</Link></li>



        {
            user?.uid ?
                <>
                    <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1]  hover:rounded-box'><Link to='/dashboard'>Dashboard</Link></li>

                    <li onClick={() => handleLogout()} className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1]  hover:rounded-box'><Link to='/login'>Logout</Link></li>
                </>
                :
                <>
                    <li className='text-xl text-white font-semibold hover:bg-white hover:text-[#21acb1]  hover:rounded-box'><Link to='/login'>Login</Link></li>
                </>
        }

    </>

    return (
        <div className="navbar bg-[#21acb1] fixed z-10 top-0 max-w-screen-xl mx-auto print:hidden">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#21acb1] rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={logo} alt='' />
                    </div>
                </div>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="btn">Button</Link>
            </div> */}
        </div>
    );
};

export default Navbar;