import React from 'react';
import useStudent from '../../../hooks/useStudent';
import Loading from '../../../component/Loading/Loading';

const StudentProfile = () => {
    const [studentCourse, isLoading] = useStudent();
    const { studentName, studentImage, fathersName, mothersName, studentId, courseName, email } = studentCourse;

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="max-w-lg mx-auto bg-cyan-600 shadow-md rounded-lg overflow-hidden">
                <div className="flex justify-center">
                    <img
                        className="w-32 h-32 object-cover rounded-full mt-6"
                        src={studentImage}
                        alt="Student"
                    />
                </div>
                <div className="text-center mt-6 p-4 text-white">
                    <h2 className="text-xl font-semibold">{studentName}</h2>
                    <p className="">{`Class: ${courseName}`}</p>
                    <p className="">{`ID: ${studentId}`}</p>
                    <p className="">{`Father's Name: ${fathersName}`}</p>
                    <p className="">{`Mother's Name: ${mothersName}`}</p>
                    <p className="">{`Email: ${email}`}</p>
                    {/* Add other information here */}
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;