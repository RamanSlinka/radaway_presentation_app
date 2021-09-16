import React from 'react';
import styleContainer from "../../common/Container.module.scss";
import style from "../slider/Slider.module.scss";
import Slider from "../slider/Slider";

const MainPage = () => {
    return (
        <div className={style.content}>
            <div className={`${styleContainer.container} ${style.sliderContainer}`}>
                <Slider/>

                <div className={style.bottomBorder}></div>
                <span className={`${styleContainer.container} ${style.innerBorderBottom}`}></span>
            </div>
            <div className={style.titleSlider}>
                <p className={style.titleTopPart}>Kabiny przysznicowe </p>
                <p className={style.titleDownPart}>firmy Radaway </p>
            </div>
        </div>

    );
};

export default MainPage;