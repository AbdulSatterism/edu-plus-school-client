import React from 'react';
import useInfo from '../../hooks/useInfo';
import Loading from '../../component/Loading/Loading';
import HomeEvent from '../Home/HomeEvent/HomeEvent';

const AboutPages = () => {
    const { about, isLoading } = useInfo();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-12'>
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl">About</div>
            <div className="card lg:card-side bg-[#d6f7f8] shadow-xl my-12 ">
                <img className='max-w-xl rounded' src={about?.image} alt="" />
                <div className="card-body">
                    <div className='mb-2'>
                        <h2 className="card-title text-[#21acb1]">About Us</h2>
                        <p>{about?.details}</p>
                    </div>
                    <div className='mb-2'>
                        <h2 className="card-title text-[#21acb1]">Vission</h2>
                        <p>{about?.vision}</p>
                    </div>
                    <div className='mb-2'>
                        <h2 className="card-title text-[#21acb1]">Mission</h2>
                        <p>{about?.mission}</p>
                    </div>
                </div>
            </div>

            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl">About Event</div>

            <HomeEvent></HomeEvent>
        </div>
    );
};

export default AboutPages;