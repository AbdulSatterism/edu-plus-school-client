import React from 'react';
import { Link } from 'react-router-dom';
import useInfo from '../../../hooks/useInfo';
import Loading from '../../../component/Loading/Loading';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Notices = () => {
    const { notice, isLoading } = useInfo();

    const settings = {
        rotate: 50,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: true,

        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-16'>
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl">upcoming notice</div>

            <div className='flex items-center justify-center bg-[#8ef3f7] rounded my-12'>
                <Slider {...settings} className=' w-1/3 rounded my-10'>
                    {notice?.map((item, index) => (
                        <div key={index} className="stats shadow slide-item ]">
                            <div className="stat">

                                <div className="stat-title">{item?.date}</div>
                                <div className="stat-value text-[#21acb1]">{item?.title}</div>
                                <p>{item?.noticeDetails}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {
                notice?.length > 3 &&

                <Link to='/notice'>
                    <button className="btn bg-[#21acb1] text-xl mx-2 text-white border-spacing-0">more Notice
                        <MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>
                    </button>
                </Link>
            }
        </div>


    );
};

export default Notices;