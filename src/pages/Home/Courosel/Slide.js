import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useInfo from '../../../hooks/useInfo';
import useClasses from '../../../hooks/useClasses';

const Slide = () => {
    const { news } = useInfo();
    const { classes } = useClasses();
    console.log(classes)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
    };
    return (
        <div>
            <Slider {...settings}>
                {news?.map((item, index) => (
                    <div key={index} className="slide-item">
                        {/* Customize the content of each slide */}
                        <img className='w-96 h-96' src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;