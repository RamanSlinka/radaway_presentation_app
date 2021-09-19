import React from 'react';
import building from "../../assets/image/central_big.jpg"
import styleContainer from "../../common/Container.module.scss";
import styles from "./Contact.module.scss";
import {BsHouseDoor, FiPhone, SiMailDotRu, TiTime} from "react-icons/all";
import ContactForm from "./ContactForm";

const Contacts = () => {
    return (
        <div className={styles.ContactsContainer}>
            <div className={styleContainer.container}>
                <h2>Kontakt</h2>
                <div>
                    <div>
                        <img src={building} alt="building" className={styles.image}/>
                    </div>
                    <div className={styles.dataContactsBlock}>
                        <div>
                            <h3>Dane kontaktowe</h3>
                            <div className={styles.dataContactsWrapper}>
                                <h4>Radaway Sp. z o.o.</h4>
                                <p><span><BsHouseDoor/></span> ul. Rabowicka 59, 62-020 Jasin </p>
                                <p><span><TiTime/></span>08:00 – 16:00</p>
                                <p><span><FiPhone/></span>
                                    <a href="tel:+48 61 835 75 10">+48 61 835 75 10</a></p>
                                <p><span><SiMailDotRu/></span>
                                    <a href="mailto:office@radaway.pl">office@radaway.pl</a>
                                </p>
                            </div>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contacts;