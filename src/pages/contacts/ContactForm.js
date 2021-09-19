import {useFormik} from "formik";
import styles from "./Contact.module.scss";
import React from "react";

const ContactForm = () => {

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
                errors.userName = 'musi mieć co najmniej 4 litery'
            }

            if (!values.email) {
                errors.email = 'Wymagane jest wypełnienie tego';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'wpisz adres w formacie aaa1@qqq.qqq';
            }
            if (!values.tel) {
                errors.tel = 'Wymagane jest wypełnienie tego';
            } else if (values.tel.length < 9) {
                errors.tel = 'wprowadź liczbę w formacie 123 456 789'
            }
            if (values.textarea.length < 1) {
                errors.textarea = 'Wymagane jest wypełnienie tego';
            }
            if (!values.checkbox) {
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
        <div>
            <form className={styles.formWrapper}
                  onSubmit={formik.handleSubmit}
            >
                <h3>Skontaktuj się z nami</h3>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputBlock}>
                        <div className={styles.singleInputWrapper}>
                            {formik.touched.userName && formik.errors.userName &&
                            <span className={styles.inputError}>{formik.errors.userName}</span>}
                            <input
                                className={styles.input}
                                placeholder="Imię i nazwisko*"
                                type="text"
                                {...formik.getFieldProps('userName')}
                            />

                        </div>
                        <div className={styles.singleInputWrapper}>
                            {formik.touched.email && formik.errors.email &&
                            <span className={styles.inputError}>{formik.errors.email}</span>}
                            <input
                                className={styles.input}
                                placeholder="Adres e-mail*"
                                type="email"
                                {...formik.getFieldProps('email')}
                            />

                        </div>
                        <div className={styles.singleInputWrapper}>
                            {formik.touched.tel && formik.errors.tel &&
                            <span className={styles.inputError}>{formik.errors.tel}</span>}
                            <input className={styles.input}
                                   placeholder="Telefon contactowy*"
                                   type="tel"
                                   {...formik.getFieldProps('tel')}
                            />
                        </div>
                        <input className={styles.input}
                               placeholder="Firma"
                               type="text"
                               {...formik.getFieldProps('text')}
                        />
                    </div>
                    <div className={styles.singleInputWrapper}>
                         <textarea placeholder="Treść wiadomości*"
                                   {...formik.getFieldProps('textarea')}
                         ></textarea>
                        {formik.touched.textarea && formik.errors.textarea &&
                        <span className={styles.inputError} style={{top: "80px"}}>{formik.errors.textarea}</span>}
                    </div>
                </div>
                <div>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        {...formik.getFieldProps('checkbox')}/>

                    <span>Wyrażam zgodę na przetwarzanie moich danych osobowych przez Radaway sp. z o.o., ul. Rabowicka 59,
                        62-020 Jasin zawartych w formularzu kontaktowym w celu udzielenia odpowiedzi na zapytanie.
                        Jednocześnie oświadczam, że zapoznałam/em się z klauzulą informacyjną.
                    </span>
                    {formik.touched.checkbox && formik.errors.checkbox &&
                    <span
                        style={{'color': 'red', fontSize: "10px", paddingLeft: "20px"}}>{formik.errors.checkbox}</span>}
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
    )
}
export default ContactForm;