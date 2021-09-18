import React from 'react';
import styleContainer from "../../common/Container.module.scss";
import style from "../../common/CommonForLinks.module.scss";
import image from "../../assets/image/Do_pobrania.png";

const LinksForDownload = () => {
    return (
        <div className={`${styleContainer.container} ${style.GlobalContainer}`}>
            <a href="https://www.radaway.pl/do-pobrania/" target="blank">
                <img src={image} alt="Download-link"/></a>
        </div>
    );
};

export default LinksForDownload;