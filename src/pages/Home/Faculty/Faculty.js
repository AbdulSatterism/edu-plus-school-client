import React from 'react';

const Faculty = ({ teacher }) => {
    const { name, subject, position, image } = teacher;
    return (
        <div className="card w-96 shadow-xl mx-auto">
            <img className=' w-80 h-64 mx-auto' style={{ borderRadius: '0px 100px 100px 100px' }} src={image} alt="" />
            <div className="card-body text-center">
                <h1 className='text-2xl text-[#21acb1]'>{name}</h1>
                <p className='text-xl'>{subject}</p>
                <p className='text-xl'>{position}</p>
            </div>
        </div>
    );
};

export default Faculty;