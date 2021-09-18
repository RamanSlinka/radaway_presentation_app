import React from 'react';
import styleContainer from "../../common/Container.module.scss";
import style from "../../common/CommonForLinks.module.scss";
import image from "../../assets/image/Servis.png";


const Service = () => {
    return (
        <div className={`${styleContainer.container} ${style.GlobalContainer}`}>
            <a href="https://www.radaway.pl/serwis/" target="blank">
                <img src={image} alt="Service-link"/></a>
        </div>
    );
};

export default Service;