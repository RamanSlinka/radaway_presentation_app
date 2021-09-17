import React from 'react';
import building from "../../assets/image/central_big.jpg"
import styleContainer from "../../common/Container.module.scss";
import styles from "./Contact.module.scss";
import {BsHouseDoor, FiPhone, SiMailDotRu, TiTime} from "react-icons/all";
import {useFormik} from "formik";

const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            tel: '',
            textarea: '',
            checkbox: false
        },
        validate: (values) => {
            const errors = {};
            if (!values.userName) {
                errors.userName = 'Wymagane jest wypełnienie tego';
            } else if (values.userName.length < 3) {
                errors.userName = 'musi mieć co najmniej 4 litery'}

            if (!values.email) {
                errors.email = 'Wymagane jest wypełnienie tego';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'wpisz adres w formacie aaa1@qqq.qqq';
            }
            if (!values.number) {
                errors.tel = 'Wymagane jest wypełnienie tego';
            } else if (values.tel.length < 9) {
                errors.tel = 'wprowadź liczbę w formacie 123 456 789'
            }
            if (values.textarea.length < 1) {
                errors.textarea = 'Wymagane jest wypełnienie tego';
            }else if (!values.checkbox ) {
                errors.checkbox = 'Wymagane jest wypełnienie tego';
            }


            return errors;
        },
        onSubmit: values => {
             alert(JSON.stringify(values));
            formik.resetForm();
        },
    })


    return (
        <div className={styles.ContactsContainer}>
            <div className={styleContainer.container}>
                <h1>Kontakt</h1>
                <div>
                    <div>
                        <img src={building} alt="building" className={styles.image}/>
                    </div>
                    <div className={styles.dataContactsBlock}>

                        <div>
                            <h2>Dane kontaktowe</h2>
                            <div className={styles.dataContactsWrapper}>
                                <h3>Radaway Sp. z o.o.</h3>
                                <p><span><BsHouseDoor/></span> ul. Rabowicka 59, 62-020 Jasin
                                </p>
                                <p>
                                    <span><TiTime/></span>
                                    08:00 – 16:00</p>
                                <p>
                                    <span><FiPhone/></span>
                                    <a href="tel:+48 61 835 75 10">+48 61 835 75 10</a></p>
                                <p>
                                    <span><SiMailDotRu/></span>
                                    <a href="mialto:office@radaway.pl">office@radaway.pl</a>
                                </p>
                            </div>
                        </div>
                        <div>

                            <div>
                                <form className={styles.formWrapper}
                                      onSubmit={formik.handleSubmit}
                                >
                                    <h2>Skontaktuj się z nami</h2>
                                    <div className={styles.inputsWrapper}>
                                        <div className={styles.inputBlock}>
                                            {formik.touched.userName && formik.errors.userName &&
                                            <span style={{'color': 'red'}}>{formik.errors.userName}</span>}
                                            <input
                                                className={styles.input}
                                                placeholder="Imię i nazwisko*"
                                                type="text"
                                                {...formik.getFieldProps('userName')}
                                            />
                                            {formik.touched.email && formik.errors.email &&
                                            <span style={{'color': 'red'}}>{formik.errors.email}</span>}
                                            <input
                                                className={styles.input}
                                                placeholder="Adres e-mail*"
                                                type="email"
                                                {...formik.getFieldProps('email')}
                                            />
                                            {formik.touched.tel && formik.errors.tel &&
                                            <span style={{'color': 'red'}}>{formik.errors.tel}</span>}
                                            <input className={styles.input}
                                                   placeholder="Telefon contactowy*"
                                                   type="tel"
                                                   {...formik.getFieldProps('tel')}
                                            />

                                            <input className={styles.input}
                                                   placeholder="Firma"
                                                   type="text"
                                                   {...formik.getFieldProps('text')}
                                            />
                                        </div>
                                        <div>
                                            {formik.touched.textarea && formik.errors.textarea &&
                                            <span style={{'color': 'red'}}>{formik.errors.textarea}</span>}
                                    <textarea placeholder="Treść wiadomości*"
                                              {...formik.getFieldProps('textarea')}
                                    ></textarea>

                                        </div>
                                    </div>

                                    <div>
                                        <input
                                            className={styles.checkbox}
                                            type="checkbox"
                                            {...formik.getFieldProps('checkbox')}/>
                                        <span>Wyrażam zgodę na przetwarzanie moich danych osobowych przez Radaway sp. z o.o., ul. Rabowicka 59, 62-020 Jasin zawartych w formularzu kontaktowym w celu udzielenia odpowiedzi na zapytanie. Jednocześnie oświadczam, że zapoznałam/em się z klauzulą informacyjną.</span>
                                        {!formik.touched.checkbox && formik.errors.checkbox &&
                                        <span style={{'color': 'red'}}>{formik.errors.checkbox}</span>}
                                    </div>
                                    <div className={styles.submitWrapper}>
                                        <input

                                            className={styles.submitButton}
                                            type="submit"
                                            value="Wyślij wiadomość"
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Contacts;