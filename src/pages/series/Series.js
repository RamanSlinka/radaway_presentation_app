import React from 'react';
import styleContainer from "../../common/Container.module.scss";
import style from "../../common/CommonForLinks.module.scss";
import image from "../../assets/image/Seria.png";

const Series = () => {
    return (
        <div className={`${styleContainer.container} ${style.GlobalContainer}`}>
            <a href="https://www.radaway.pl/seria/" target="blank">
                <img src={image} alt="Seria-link"/></a>
        </div>
    );
};

export default Series;