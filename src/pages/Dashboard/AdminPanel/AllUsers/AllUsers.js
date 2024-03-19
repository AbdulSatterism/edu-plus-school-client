import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../component/Loading/Loading';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    });


    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to make admin ${user?.name} `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/users/admin/${user?._id}`)
                        .then(data => {
                            if (data.data?.modifiedCount) {
                                refetch();
                                Swal.fire(
                                    `Make admin ${user?.name} done`,
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want to delete this user?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(data => {
                        if (data.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${user?.name} is deleted from database!!`,
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
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl  my-4">total users : {users?.length}</div>
            <table className="table ">
                <thead>
                    <tr className='text-lg text-center border-1 border-[#21acb1] text-[#21acb1] '>
                        <th> No </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role </th>
                        <th>Make Admin</th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        users?.map((user, index) =>
                            <tr key={user?._id} className='border-1 border-[#21acb1] p-2'>
                                <th className='text-center'>
                                    {index + 1}
                                </th>
                                <td className='text-center'>
                                    <div className="font-bold uppercase">{user?.name}</div>
                                </td>
                                <td className='text-center'>
                                    {user?.email}
                                </td>
                                <td className='text-center'>
                                    {user?.role}
                                </td>
                                <td className='text-center'>{user.role === 'admin' ? 'admin' : <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="btn btn-ghost btn-sm bg-cyan-600 text-white"><FaUserShield></FaUserShield> </button>}</td>
                                <td className='text-center'>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
