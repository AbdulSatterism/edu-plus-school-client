import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const [paymentInfo, setPaymentInfo] = useState();

    const query = new URLSearchParams(location.search)
    const transactionId = query.get("transactionId");

    useEffect(() => {
        fetch(`https://edu-plus-school-server.onrender.com/payment/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => {
                setPaymentInfo(data);
                console.log(data);
            })
    }, [transactionId])

    if (!paymentInfo?._id) {
        return <div className="overflow-x-auto my-24">No payment found</div>
    }

    return (
        <div className="overflow-x-auto my-24">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Email</th>
                        <th>Payment amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={paymentInfo?.studentImage} alt="" />
                                </div>
                            </div>
                        </td>
                        <td>
                            {paymentInfo?.courseName}
                        </td>
                        <td>{paymentInfo?.email}</td>
                        <td>${paymentInfo?.paymentFee}</td>
                    </tr>
                </tbody>


            </table>
            <button onClick={() => window.print()} className="btn bg-[#21acb1] text-xl  text-white border-spacing-0 ml-auto mt-5 block">print</button>
        </div>
    );
};

export default PaymentSuccess;