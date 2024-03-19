import React from 'react';
import useTeachers from '../../../hooks/useTeachers';
import Faculty from './Faculty';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Loading from '../../../component/Loading/Loading';

const Faculties = () => {
    const { teachers, isLoading } = useTeachers();
    const teacherLimit = teachers?.slice(0, 3)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-16'>
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl my-8">faculties</div>
            <div className=' grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1'>
                {
                    teacherLimit?.map(teacher => <Faculty
                        key={teacher?._id}
                        teacher={teacher}
                    ></Faculty>)
                }
            </div>


            {
                teachers?.length > 3 &&

                <Link to='/faculty'>
                    <button className="btn bg-[#21acb1] text-xl mx-2 text-white border-spacing-0">more ...
                        <MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>
                    </button>
                </Link>
            }

        </div>
    );
};

export default Faculties;