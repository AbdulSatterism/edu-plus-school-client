import React from 'react';
import academic from '../../../assests/images/academic.jpg'
import AcademicDetails from './AcademicDetails';
import AcademicBooks from './AcademicBooks';

const Academics = () => {

    return (
        <>
            <div className="hero min-h-[400px]" style={{ backgroundImage: `url(${academic})` }}>
            </div>

            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl my-8">Academic Details</div>

            <AcademicDetails></AcademicDetails>

            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl my-8">Academic Books</div >

            <AcademicBooks></AcademicBooks>
        </>
    );
};

export default Academics;