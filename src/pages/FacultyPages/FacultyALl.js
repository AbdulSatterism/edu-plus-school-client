import React from 'react';
import useTeachers from '../../hooks/useTeachers';
import Loading from '../../component/Loading/Loading';

const FacultyALl = () => {
    const { teachers, isLoading } = useTeachers();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' my-28'>
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl  my-4">faculties</div>
            <div className=' grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1'>

                {
                    teachers?.map(teacher =>
                        <div key={teacher?._id} className="card w-96 shadow-xl mx-auto my-4">
                            <img className=' w-80 h-64 mx-auto bg-[#21acb1] z-10' style={{ borderRadius: '0px 100px 100px 100px' }} src={teacher?.image} alt="Shoes" />
                            <div className="card-body text-center">
                                <h1 className='text-2xl text-[#21acb1]'>{teacher?.name}</h1>
                                <p className='text-xl'>{teacher?.subject}</p>
                                <p className='text-xl'>{teacher?.position}</p>
                            </div>
                        </div>)
                }

            </div>

        </div>
    );
};

export default FacultyALl;