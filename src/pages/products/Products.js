import React from 'react';
import styles from "./product/Product.module.scss"
import styleContainer from "../../common/Container.module.scss"
import Product from "./product/Product";
import image1 from "../../assets/image/item1.png"
import image2 from "../../assets/image/item2.png"
import image3 from "../../assets/image/item3.png"

const Products = () => {
    return (
        <div>
            <div className={styles.titleContainer}>
                <div className={styles.titleProduct}>
                    <p className={styleContainer.container}>
                        Nasze produkty:</p>
                </div>
                <div className={styles.linkFB}>
                    <a href="" className={styleContainer.container}>Znajdź nas na FB >></a>
                </div>
            </div>
                <div className={`${styleContainer.container} ${styles.ProductContainer}`}>
                    <Product style={image1} title={"KABINY PRZYSZNICOWE"}/>
                    <Product style={image2} title={"BRODZIKI PRZYSZNICOWE"}/>
                    <Product style={image3} title={"PARAWANY NAWANNOWE"}/>
                </div>
            
        </div>
    );
};

export default Products;