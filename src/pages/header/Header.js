import React from "react";
import style from "./Header.module.scss"
import styleContainer from "../../common/Container.module.scss"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <NavLink to={"/radaway_presentation_app"}>
                    <img src="https://www.radaway.pl/wp-content/themes/radaway_v2/images/main/LOGO-01.svg"
                         alt="Logo of company Radaway" className={style.logo}
                    />
                </NavLink>
                <div className={style.contact}>
                    <ul>
                        <li>RADAWAY SP. Z O.O.</li>
                        <li>
                            ul.Rabowicka 59, 62-020 Jasin
                        </li>
                        <li>godz. 08:00 - 16:00</li>
                        <li>tel.
                            <a href="tel:61 835 75 10">61 835 75 10</a>
                        </li>
                        <li>email:
                            <a href="mailto:office@radaway.pl" type="email">office@radaway.pl</a></li>
                    </ul>
                    <div className={style.rightBorder}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;