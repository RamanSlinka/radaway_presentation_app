import React from 'react';
import slider from "./../../assets/image/slider.png"
import styleContainer from "../../common/Container.module.scss";
import style from "./Slider.module.scss";

const Slider = () => {
    return (
        <div>
            <div className={`${styleContainer.container} ${style.sliderContainer}`}>
                <div>
                    <img src={slider} alt="bath-room" className={style.slider}/>
                    <div className={style.titleSlider}>
                        <p>Kabiny przysznicowe <br/>
                            firmy Radaway
                        </p>
                    </div>
                    <span className={style.bottomBorder}></span>
                </div>

            </div>
        </div>
    );
};

export default Slider;