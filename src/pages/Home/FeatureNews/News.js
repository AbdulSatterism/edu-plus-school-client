import React from 'react';
import useInfo from '../../../hooks/useInfo';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Loading from '../../../component/Loading/Loading';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const News = () => {
    const { news, isLoading } = useInfo();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',

    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-16 text-[#21acb1] '>
            <div className="divider  text-[#21acb1] uppercase font-semibold text-2xl">features News</div>

            <Slider {...settings} className='my-12 shadow-sm'>
                {news?.map((item, index) => (
                    <div key={index} className="slide-item mx-4 p-2">
                        {/* Customize the content of each slide */}
                        <img className='w-96 h-80' src={item.image} alt={item.title} />
                        <div className='justify-between flex px-4'>
                            <h2>{item.title}</h2>
                            <h2>{item.date}</h2>
                        </div>
                    </div>
                ))}
            </Slider>

            {
                news?.length > 3 &&

                <Link to='/news'>
                    <button className="btn bg-[#21acb1] text-xl mx-2 text-white border-spacing-0">more news
                        <MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>
                    </button>
                </Link>
            }
        </div>
    );
};

export default News;