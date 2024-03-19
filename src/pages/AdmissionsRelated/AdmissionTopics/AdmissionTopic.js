import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const AdmissionTopic = ({ classInfo }) => {
    const { image, class: name, totalFee, _id, duration, admissionFee, monthlyFee } = classInfo;

    return (
        <>
            <div className="card lg:card-side  bg-[#064446] glass shadow-xl">

                <figure><img className='' src={image} alt="" /></figure>

                <div className="justify-center card-body text-slate-100 ">
                    <h2 className="text-3xl ">{name}</h2>
                    <p>Class limit: {duration}</p>
                    <p>Admission fees: ${admissionFee}</p>
                    <p>Monthly fees: ${monthlyFee}</p>
                    <p>Total fees: ${totalFee}</p>

                    <div className="justify-end card-actions glass">
                        <Link to={`/enroll/${_id}`}>
                            <button className="btn bg-[#21acb1] text-xl mx-2 text-white border-spacing-0">enroll now
                                <IoCartOutline></IoCartOutline>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdmissionTopic;

