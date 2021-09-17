import React from "react";
import style from "./Navbar.module.scss"
import {Link} from "react-scroll";
import styleContainer from "../../common/Container.module.scss";
import {IoSearchOutline} from "react-icons/all";
import {NavLink} from "react-router-dom";

const Navbar = () => {




    return (
        <div className={style.navbarWrapper}>
            <div className={`${styleContainer.container} ${style.navbarContainer}`}>
                <nav className={style.navbar}>
                    <NavLink to="/" exact
                          activeClass={style.active}
                    >Start</NavLink>
                    <Link to="product"
                          activeClass={style.active}
                    >Produkty</Link>
                    <Link to="main">Serie</Link>
                    <Link to="link">Pliki do pobanija</Link>
                    <Link to="servis">Serwis</Link>
                    <NavLink to="/contact">Kontakt</NavLink>
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