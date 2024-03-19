import React from 'react';
import useClasses from '../../../hooks/useClasses';
import academic from '../../../assests/images/academic.jpg'
import AdmissionTopic from './AdmissionTopic';
import Loading from '../../../component/Loading/Loading';

const AdmissionTopics = () => {
    const { classes, isLoading } = useClasses();


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className="hero min-h-[400px]" style={{ backgroundImage: `url(${academic})` }}>
            </div>

            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl my-12">Admission classes here</div>

            <div className='grid gap-4 p-4 mx-auto mt-20 lg:grid-cols-2 ' >
                {
                    classes?.map(classInfo => <AdmissionTopic
                        key={classInfo?._id}
                        classInfo={classInfo}
                    ></AdmissionTopic>)
                }
            </div>

        </>
    );
};

export default AdmissionTopics;
// style={{ backgroundImage: `url(${banner})` }}