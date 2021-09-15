import React from "react";
import style from "./Footer.module.scss"
import styleContainer from "../../common/Container.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <p>Copyright 2017 &copy; <b>Radaway</b> <br/>
                    polityka prywatnośći >></p>
                </div>
                <div className={style.rightDescription}>
                    <p>project strony <br/>
                    Radaway.pl</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;