import React from "react";
import style from "./Header.module.scss"
import styleContainer from "../../common/Container.module.scss"

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <img src="https://www.radaway.pl/wp-content/themes/radaway_v2/images/main/LOGO-01.svg"
                     alt="Radaway Sp. z o.o." className={style.logo}
                />
                <div>
                    <div></div>
                    <div className={style.contact}>
                        <ul>
                            <li>RADAWAY SP. Z O.O.</li>
                            <li>ul.Rabowicka 59, 62-020 Jasin</li>
                            <li>godz. 08:00 - 16:00</li>
                            <li>tel. 61 835 75 10</li>
                            <li>email:
                                <a href="office@radaway.pl" type="email">office@radaway.pl</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;