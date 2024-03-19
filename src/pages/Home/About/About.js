import React from 'react';
import Loading from '../../../component/Loading/Loading';
import useInfo from '../../../hooks/useInfo';
import { Link } from 'react-router-dom';


const About = () => {
    const { about, isLoading } = useInfo();


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container my-12">
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl">About</div>
            <div className=" text-justify ">
                <p className="py-6 px-4">
                    {about?.details} <Link to='/about' className='text-[#21acb1]'> ...more</Link>
                </p>

            </div>
        </div>

    );
};

export default About;