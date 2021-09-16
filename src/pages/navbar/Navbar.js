import React from "react";
import style from "./Navbar.module.scss"
import {Link} from "react-scroll";
import styleContainer from "../../common/Container.module.scss";
import {IoSearchOutline} from "react-icons/all";

const Navbar = () => {
    return (
        <div className={style.navbarWrapper}>
            <div className={`${styleContainer.container} ${style.navbarContainer}`}>
                <nav className={style.navbar}>
                    <Link to="main">Start</Link>
                    <Link to="main">Produkty</Link>
                    <Link to="main">Serie</Link>
                    <Link to="main">Pliki do pobanija</Link>
                    <Link to="main">Serwis</Link>
                    <Link to="contact">Kontakt</Link>
                </nav>
                <div className={style.inputWrapper}>
                    <input type="text" placeholder="Wyszukaj na stronie..."
                           className={style.input}
                    />
                    <IoSearchOutline className={style.icon}/>
                </div>
            </div>
            <div className={style.rightShadeBorder}></div>
        </div>
    );
};

export default Navbar;