import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { FaTrashAlt } from 'react-icons/fa';
import Loading from '../../../../component/Loading/Loading';
import Swal from 'sweetalert2';

const AllStudents = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: students = [], refetch, isLoading } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-students');
            return res.data
        }
    });

    const handleUpdate = () => {
        // TODO: updated not yet
    }

    const handleDelete = (student) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want to delete this Student?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/student/${student._id}`)
                    .then(data => {
                        if (data.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${student?.studentName} is deleted from database!!`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto p-4">
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl  my-4">total Students : {students?.length}</div>
            <table className="table ">
                <thead>
                    <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1] '>
                        <th> No </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class </th>
                        <th>Update Student</th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        students?.map((student, index) =>
                            <tr key={student?._id} className='border-1 border-[#21acb1] p-2'>
                                <th className='text-center'>
                                    {index + 1}
                                </th>
                                <td className='text-center'>
                                    <div className="font-bold uppercase">{student?.studentName}</div>
                                </td>
                                <td className='text-center'>
                                    {student?.email}
                                </td>
                                <td className='text-center'>
                                    {student?.courseName}
                                </td>

                                <td className='text-center'>
                                    <button onClick={() => handleUpdate(student)} className="btn btn-ghost btn-sm bg-cyan-600 text-white">Update</button>
                                </td>

                                <td className='text-center'>
                                    <button onClick={() => handleDelete(student)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllStudents;