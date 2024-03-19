import React from 'react';
import banner from '../../../assests/images/banner.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Banner = () => {


    return (
        <div className="min-h-screen hero" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-start text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl font-medium uppercase text-[#21acb1]">Welcome </h1>
                    <p className="mb-5 text-xl justify-normal shadow-black">
                        The Wisdom Wave University  was founded by the Dhaka  Mission in 1995. Dhaka Ahsania Mission is a non-profit voluntary organization in Bangladesh.
                    </p>
                    <Link to='/admission'>
                        <button className="btn bg-[#21acb1] text-xl mx-2 text-white border-spacing-0">Admission<div className="badge badge-secondary">open</div>
                            <MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;