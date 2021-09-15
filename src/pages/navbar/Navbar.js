import React from "react";
import style from "./Navbar.module.scss"
import { Link } from "react-scroll";
import styleContainer from "../../common/Container.module.scss";
import {IoSearchOutline} from "react-icons/all";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navbarContainer}>
                <div className={`${styleContainer.container} ${style.navbarContainer}`}>
                    <Link to="main">Start</Link>
                    <Link to="main">Produkty</Link>
                    <Link to="main">Serie</Link>
                    <Link to="main">Pliki do pobanija</Link>
                    <Link to="main">Serwis</Link>
                    <Link to="contact">Kontakt</Link>
                </div>
                <div className={style.input}>
                    <input type="text" placeholder="Wyszukaj na stronie..."

                    />
                    <IoSearchOutline className={style.icon}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;