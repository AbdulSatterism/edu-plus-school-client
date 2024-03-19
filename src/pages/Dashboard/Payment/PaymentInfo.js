import React from 'react';
import useStudent from '../../../hooks/useStudent';
import { FaMoneyBillAlt } from 'react-icons/fa';
import Loading from '../../../component/Loading/Loading';

const PaymentInfo = () => {
    const [studentCourse, isLoading] = useStudent();
    const { monthlyFee, admissionFee, subTotalFees } = studentCourse;

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto p-8 items-center'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 bg-[#064446] text-white gap-2">
                <div className="stat  glass">
                    <div className="stat-title text-white">You can pay monthly</div>
                    <div className="stat-value text-[#21acb1]">${monthlyFee}</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">pay</button>
                    </div>
                </div>
                <div className="stat  glass">
                    <div className="stat-title text-white">pay admission fee</div>
                    <div className="stat-value text-[#21acb1]">${admissionFee}</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">pay</button>
                    </div>
                </div>
                <div className="stat  glass">
                    <div className="stat-title text-white">You can pay sub-total</div>
                    <div className="stat-value text-[#21acb1]">${subTotalFees}</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">pay</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PaymentInfo;