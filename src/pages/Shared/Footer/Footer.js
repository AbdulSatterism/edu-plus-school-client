import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="footer p-12 bg-[#21acb1] text-white">
                <nav>
                    <h6 className="footer-title">School Info</h6>
                    <Link className="link link-hover">News</Link>
                    <Link className="link link-hover">Event</Link>
                    <Link className="link link-hover">Notice</Link>
                    <Link className="link link-hover">Library</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Students Corner</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Academic Info</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>

            <footer className="footer px-10 py-4 border-t bg-[#21acb1] text-white  border-base-300">

                <aside className="items-center grid-flow-col">
                    <div className="avatar">
                        <div className="w-20 rounded">
                            <img src={logo} alt='' />
                        </div>
                    </div>
                    <p>edu-plus School <br />Providing reliable tech since 1992</p>
                </aside>

                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/abdul.satter.1614'><svg width="32" viewBox="0 0 24 24" className="fill-current ">
                            <FaFacebook /> </svg></Link>
                        <Link><svg width="32" viewBox="0 0 24 24" className="fill-current">
                            <FaYoutube /> </svg></Link>
                        <Link><svg width="32" viewBox="0 0 24 24" className="fill-current">
                            <FaTwitter />  </svg></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;