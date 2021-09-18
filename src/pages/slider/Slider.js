import React from 'react';
import slider from "./../../assets/image/slider.png"
import slider2 from "./../../assets/image/slider2.png"
import {Carousel} from "react-bootstrap";

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={slider}
                    alt="Kabiny przysznicowe"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={slider2}
                    alt="Kabiny przysznicowe"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;