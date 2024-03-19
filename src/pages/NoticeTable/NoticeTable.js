import React from 'react';
import useInfo from '../../hooks/useInfo';
import Loading from '../../component/Loading/Loading';

const NoticeTable = () => {
    const { notice, isLoading } = useInfo();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto p-10 my-16">
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl my-4">upcoming notice</div>
            <table className="table">
                {/* head */}
                <thead className='text-[#21acb1]'>
                    <tr >
                        <th>Serial</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        notice.map((nt, index) => <tr>
                            <th>
                                {index}
                            </th>
                            <td>
                                <div className=" items-center gap-3">
                                    <div className="font-bold">{nt?.title}</div>
                                </div>
                            </td>
                            <td>
                                {nt?.noticeDetails}
                            </td>
                            <td>
                                {nt?.date}
                            </td>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default NoticeTable;