import React from "react";
import styles from "./Product.module.scss"

const Product = ({style,title}) => {
    return (
        <div id="product"
            className={styles.product}>
            <div >
                <img src={style} alt="products" className={styles.imageContainer}/>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores dicta doloribus eligendi et eveniet fuga hic ipsam
                libero maiores natus numquam obcaecati odio placeat,
                quo ratione sequi, veniam voluptatem voluptatum.
            </p>
        </div>
    );
};

export default Product;