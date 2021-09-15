import React from "react";
import style from "./Product.module.scss"

const Product = (props) => {
    return (
        <div className={style.product}>
            <div className={style.imageContainer}>
                <img src={props.style} alt="product"/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta doloribus eligendi et eveniet fuga hic ipsam libero maiores natus numquam obcaecati odio placeat, quo ratione sequi, veniam voluptatem voluptatum.
            </p>
        </div>
    );
};

export default Product;