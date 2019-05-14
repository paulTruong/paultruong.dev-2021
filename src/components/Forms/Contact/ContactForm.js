import React from "react"
import styles from "./ContactForm.module.css"

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success"))
      .catch(() => alert("error"));
    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: [e.target.value] })

  render() {
    const { name, email, message } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label className={styles.form__label}>Name: <input className={styles.form__input} type="text" name="name" value={name} onChange={this.handleChange}></input></label>
        </div>
        <div>
          <label className={styles.form__label}>Email: <input className={styles.form__input} type="email" name="email" value={email} onChange={this.handleChange}></input></label>
        </div>
        <div>
          <label className={styles.form__label}>Message: <textarea rows="5" className={styles.form__input} name="message" value={message} onChange={this.handleChange}></textarea></label>
        </div>
        <input className={styles.form__submit} type="submit" value="Submit" />
      </form>
    )
  }
}
export default ContactForm
