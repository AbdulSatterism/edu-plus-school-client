import React from 'react';
import useClasses from '../../../hooks/useClasses';
import Loading from '../../../component/Loading/Loading';

const AcademicDetails = () => {
    const { classes, isLoading } = useClasses();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto p-4">
            <table className="table ">
                <thead>
                    <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1] '>
                        <th> No </th>
                        <th>Class</th>
                        <th>Duration</th>
                        <th>Admission </th>
                        <th>Monthly </th>
                        <th>Total </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        classes?.map((classInfo, index) =>
                            <tr key={classInfo?._id} className='border-1 border-[#21acb1] p-2'>
                                <th className='text-center'>
                                    {index + 1}
                                </th>
                                <td className='text-center'>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask bg-[#21acb1] mask-squircle w-12 h-12">
                                                <img src={classInfo?.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold uppercase">{classInfo?.class}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    {classInfo?.duration}
                                </td>
                                <td className='text-center'>
                                    $: {classInfo?.admissionFee}
                                </td>
                                <td className='text-center'>$: {classInfo?.monthlyFee}</td>
                                <td className='text-center'> $: {classInfo?.totalFee}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AcademicDetails;