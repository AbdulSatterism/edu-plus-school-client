import React from 'react';
import useClasses from '../../../hooks/useClasses';
import Loading from '../../../component/Loading/Loading';

const AcademicBooks = () => {
    const { classSubjects, isLoading } = useClasses();
    const classOne = classSubjects[0]
    const classTwo = classSubjects[1]
    const classThree = classSubjects[2]
    const classFour = classSubjects[3]
    const classFive = classSubjects[4]

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className="overflow-x-auto mx-auto p-1">
                <table className="table grid lg:grid-cols-5 md:grid-cols-3 mx-auto border-dotted border-2 border-[#21acb1] p-6">
                    <div className='mx-auto'>
                        <thead>
                            <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1] '>
                                <th>Class One</th>
                            </tr>
                        </thead>
                        <tbody >
                            {classOne?.map((one, i) =>
                                <tr key={i} className='border-1 border-[#21acb1] p-2'>
                                    <td className='text-center'> {one}</td>
                                </tr>
                            )}
                        </tbody>
                    </div>
                    <div className='mx-auto'>
                        <thead>
                            <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1] '>
                                <th>Class Two</th>
                            </tr>
                        </thead>
                        <tbody >
                            {classTwo?.map((two, i) =>
                                <tr key={i} className='border-1 border-[#21acb1] p-2'>
                                    <td className='text-center'> {two}</td>
                                </tr>
                            )}
                        </tbody>
                    </div>
                    <div className='mx-auto'>
                        <thead>
                            <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1] '>
                                <th>Class Three</th>
                            </tr>
                        </thead>
                        <tbody >
                            {classThree?.map((three, i) =>
                                <tr key={i} className='border-1 border-[#21acb1] p-2'>
                                    <td className='text-center'> {three}</td>
                                </tr>
                            )}
                        </tbody>
                    </div>
                    <div className='mx-auto'>
                        <thead>
                            <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1]'>
                                <th>Class Four</th>
                            </tr>
                        </thead>
                        <tbody >
                            {classFour?.map((four, i) =>
                                <tr key={i} className='border-1 border-[#21acb1] p-2'>
                                    <td className='text-center'> {four}</td>
                                </tr>
                            )}
                        </tbody>
                    </div>
                    <div className='mx-auto'>
                        <thead>
                            <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1]'>
                                <th>Class Five</th>
                            </tr>
                        </thead>
                        <tbody >
                            {classFive?.map((five, i) =>
                                <tr key={i} className='border-1 border-[#21acb1] p-2'>
                                    <td className='text-center'> {five}</td>
                                </tr>
                            )}
                        </tbody>
                    </div>
                </table >
            </div >
        </>
    );
};

export default AcademicBooks;