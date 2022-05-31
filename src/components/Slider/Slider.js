import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/mujib100.png'
import './slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel
                autoPlay
                // showIndicators={false}
                showThumbs={false}
                dynamicHeight={true}
                infiniteLoop={true}
                showStatus={false}
            >
                <div>
                    <img height='500px' alt='' src={img1} />
                </div>
                <div>
                    <img height='500px' alt='' src={img1} />
                </div>
                <div>
                    <img height='500px' alt='' src={img1} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;