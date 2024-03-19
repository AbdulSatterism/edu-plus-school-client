import React from 'react';

const Event = ({ event }) => {
    const { image, details, title, date } = event;
    return (
        <div className="card lg:card-side bg-[#d6f7f8] shadow-xl my-10">
            <img className='max-w-xl rounded' src={image} alt="" />
            <div className="card-body">
                <h2 className="card-title text-[#21acb1]">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;