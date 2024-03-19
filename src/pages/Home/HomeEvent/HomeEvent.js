import React from 'react';
import useInfo from '../../../hooks/useInfo';
import Loading from '../../../component/Loading/Loading';
import Event from './Event';

const HomeEvent = () => {
    const { homeEvent, isLoading } = useInfo();

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container my-16 p-4'>
            {
                homeEvent.map(event =>
                    <Event
                        key={event?.id}
                        event={event}
                    ></Event>
                )
            }
        </div>
    );
};

export default HomeEvent;