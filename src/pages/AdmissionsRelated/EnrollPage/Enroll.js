import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import academic from '../../../assests/images/academic.jpg'
import { IoCartOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import Loading from '../../../component/Loading/Loading';
import useStudent from '../../../hooks/useStudent';

const Enroll = () => {
    const [studentCourse, isLoading] = useStudent();
    const { user } = useContext(AuthContext);


    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const bookingInfo = useLoaderData();
    const { image: courseImage, class: name, totalFee, admissionFee, monthlyFee, duration } = bookingInfo;
    const subTotalFees = (admissionFee + totalFee);
    const navigate = useNavigate()

    const imageHostingKey = process.env.REACT_APP_Image_key;
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


    const handleOnSubmit = data => {


        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(imageHostingURL, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes?.data?.display_url
                    const studentInfo = {
                        studentName: data?.studentName,
                        studentImage: imgURL,
                        email: user?.email,
                        role: "student",
                        fathersName: data?.fathersName,
                        mothersName: data?.mothersName,
                        address: data?.address,
                        DOB: data?.DOB,
                        birthNo: data?.birthNo,
                        gender: data?.gender,
                        courseName: name,
                        phone: data?.phone,
                        courseImage: courseImage,
                        duration,
                        monthlyFee: parseFloat(monthlyFee),
                        admissionFee: parseFloat(admissionFee),
                        subTotalFees: parseFloat(subTotalFees)
                    }

                    axios.post('https://edu-plus-school-server.onrender.com/students', studentInfo)
                        .then(data => {
                            if (data.data?.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Course enrolled successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/')
                            }
                        })
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className="z-10 min-h-screen p-4 mt-16 hero" style={{ backgroundImage: `url(${academic})` }}>

                <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl mb-16 z-10">Admission process</div>

                <form onSubmit={handleSubmit(handleOnSubmit)} className='p-12 bg-opacity-70 hero-overlay '>
                    <div className=' grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-6 '>
                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Student Name</span>
                            </label>
                            <input type="text"
                                {...register("studentName", { required: true })}
                                placeholder="Enter student name" className="input input-bordered" />
                            {errors.studentName && <span className='text-red-600'>Name is required</span>}

                        </div>
                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Student Email</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered" />
                            {errors.email && <span className='text-red-600'> email is required</span>}

                        </div>

                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Fathers Name</span>
                            </label>
                            <input type="text"
                                {...register("fathersName", { required: true })}
                                placeholder="Enter your father name" className="input input-bordered" />
                            {errors.fathersName && <span className='text-red-600'>Fathers Name is required</span>}

                        </div>
                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Mothers Name</span>
                            </label>
                            <input type="text"
                                {...register("mothersName", { required: true })}
                                placeholder="Enter your mother name" className="input input-bordered" />
                            {errors.mothersName && <span className='text-red-600'>This email is required</span>}

                        </div>

                        <div className="col-span-full form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Address</span>
                            </label>
                            <input type="text"
                                {...register("address", { required: true })}
                                placeholder="Enter your address" className="input input-bordered" />
                            {errors.address && <span className='text-red-600'>address is required</span>}
                        </div>

                        <div className="sm:col-span-2 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Date of birth</span>
                            </label>

                            <input type="date"
                                {...register("DOB", { required: true })}
                                placeholder="select your date of birth" className="input input-bordered" />
                            {errors.DOB && <span className='text-red-600'>field is required</span>}

                        </div>
                        <div className="sm:col-span-2 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Birth certificate No</span>
                            </label>
                            <input type="number"
                                {...register("birthNo", { required: true })}
                                placeholder="enter your birth certificate no" className="input input-bordered" />
                            {errors.birthNo && <span className='text-red-600'>field is required</span>}
                        </div>
                        <label className="sm:col-span-2 max-w-xs form-control">
                            <div className="label">
                                <span className="label-text text-[#21acb1]">Gender</span>
                            </div>
                            <select className="select select-bordered" {...register("gender", { required: true })}>
                                <option disabled selected>Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='others'>Others</option>
                            </select>
                        </label>

                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Selected Course</span>
                            </label>
                            <input type="text"
                                {...register("courseName", { required: true })}
                                className="input input-bordered" defaultValue={name} readOnly />
                        </div>

                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Phone</span>
                            </label>
                            <input type="number"
                                {...register("phone", { required: true })}
                                placeholder="Enter your phone number" className="input input-bordered" />
                            {errors.phone && <span className='text-red-600'>field is required</span>}

                        </div>
                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Admission + Fees 1 year</span>
                            </label>
                            <input type="text"
                                {...register("subTotalFees", { required: true })}
                                className="input input-bordered" placeholder='Admission + Fees 1 year' defaultValue={subTotalFees} readOnly />

                        </div>
                        <div className="sm:col-span-3 form-control">
                            <label className="label">
                                <span className="label-text text-[#21acb1]">Image</span>
                            </label>
                            <input type="file"
                                {...register("image", { required: true })}
                                className="input input-bordered" />

                        </div>


                        <div className="col-span-full form-control my-8">
                            {
                                studentCourse ?
                                    <>
                                        <p className='text-red-600'>sorry you can't buy course by this email. this email already has a course</p>
                                        <button disabled className="btn bg-[#21acb1] text-xl  text-white border-spacing-0">enroll <IoCartOutline></IoCartOutline></button></>
                                    :
                                    <button className="btn bg-[#21acb1] text-xl  text-white border-spacing-0">enroll <IoCartOutline></IoCartOutline></button>

                            }
                        </div>


                    </div>
                </form>

            </div>
        </>
    );
};

export default Enroll;




