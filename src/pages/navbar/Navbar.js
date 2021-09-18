import React, {useState} from "react";
import style from "./Navbar.module.scss"
import styleContainer from "../../common/Container.module.scss";
import {IoSearchOutline} from "react-icons/all";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const [value, setValue] = useState('')

    const getInputValue = (e) => {
        setValue(e.currentTarget.value)
    }


    const showInputValue = (event) => {
        if (event.key === 'Enter') {

            alert(value)
            console.log('do validate')
            setValue('')
        }
    }


    return (
        <div className={style.navbarWrapper}>
            <div className={`${styleContainer.container} ${style.navbarContainer}`}>
                <nav className={style.navbar}>

                    <NavLink to="/" exact
                    >Start</NavLink>
                    <NavLink to="/producty">Produkty</NavLink>
                    <NavLink to="/serie">Serie</NavLink>
                    <NavLink to="/do-pobrania">Pliki do pobanija</NavLink>
                    <NavLink to="/servis">Serwis</NavLink>
                    <NavLink to="/contact">Kontakt</NavLink>
                </nav>
                <div className={style.inputWrapper}>
                    <input type="text" placeholder="Wyszukaj na stronie..."
                           className={style.input}
                           onKeyPress={showInputValue}
                        // onClick={inputValue}
                           onChange={getInputValue}
                           value={value}
                    />
                    <IoSearchOutline className={style.icon}/>
                </div>
            </div>
            <div className={style.rightShadeBorder}></div>
        </div>
    );
};

export default Navbar;