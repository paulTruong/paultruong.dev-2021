import React from "react"
import styles from "./ContactForm.module.css"

const ContactForm = () => (
  <form className={styles.form} name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label className={styles.form__label}>Name: <input className={styles.form__input} type="text" name="name"></input></label>
    </div>
    <div>
      <label className={styles.form__label}>Email: <input className={styles.form__input} type="email" name="email"></input></label>
    </div>
    <div>
      <label className={styles.form__label}>Message: <textarea rows="5" className={styles.form__input} name="message"></textarea></label>
    </div>
    <input className={styles.form__submit} type="submit" value="Submit" />
  </form>
)

export default ContactForm
