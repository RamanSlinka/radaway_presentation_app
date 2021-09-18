import React from 'react';
import styleContainer from "../../common/Container.module.scss";
import style from "../../common/CommonForLinks.module.scss";
import image from "../../assets/image/ProductsGlobal1.png"

const ProductsGlobal = () => {
    return (
        <div className={`${styleContainer.container} ${style.GlobalContainer}`}>
            <a href="https://www.radaway.pl/katalog-produktow-2021-2022/" target="blank">
                <img src={image} alt="Products-link"/></a>
        </div>
    );
};

export default ProductsGlobal;