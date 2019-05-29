import React from "react"
import styles from "./ContactForm.module.css"

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", topic: "", submitButtonValue: "Submit", isSubmitted: false };
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit = e => {
    this.setState({ submitButtonValue: "Submitting..." });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(
        () => {
          this.setState({ submitButtonValue: "Submitted", isSubmitted: true });
          console.log("Form submitted")
        }
      )
      .catch((error) => alert(error));
    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: [e.target.value] })

  render() {
    const { name, email, message, topic, submitButtonValue, isSubmitted } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.form__field}>
          <label className={styles.form__label}>Name: <input className={styles.form__input} type="text" name="name" value={name} onChange={this.handleChange} required></input></label>
        </div>
        <div className={styles.form__field}>
          <label className={styles.form__label}>Email: <input className={styles.form__input} type="email" name="email" value={email} onChange={this.handleChange} required></input></label>
        </div>
        <div className={styles.form__field}>
          <label for="topic" className={styles.form__label}>What are you after?</label>
          <select name="topic" value={topic} className={styles.form__input} onChange={this.handleChange}>
            <option value="general">General inquiry</option>
            <option value="website">A web project</option>
            <option value="accessibility">Accessibility</option>
            <option value="hi">Just saying hi</option>
          </select>
        </div>
        <div className={styles.form__field}>
          <label className={styles.form__label}>Message: <textarea rows="5" className={styles.form__input} name="message" value={message} onChange={this.handleChange}></textarea></label>
        </div>
        <input className={styles.form__submit} type="submit" value={submitButtonValue} disabled={isSubmitted} />
        <div>
          {
            isSubmitted ? (
              <div>Thanks for getting in contact! I'll be in touch with you soon.</div>
            ) : (
                null
              )
          }
        </div>
      </form >
    )
  }
}
export default ContactForm
