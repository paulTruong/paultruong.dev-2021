import { Link } from "gatsby"
import React from "react"
import footerStyles from "./footer.module.css"

class Footer extends React.Component {
    render() {
        return (
            <footer className={footerStyles.footer}>
                <nav>
                    <ul className={footerStyles.footerMenu}>
                        <li className={footerStyles.footerMenu__item}>
                            <Link className={footerStyles.footerMenu__link} to="/">Home</Link>
                        </li>
                        <li className={footerStyles.footerMenu__item}>
                            <Link className={footerStyles.footerMenu__link} to="/about">About</Link>
                        </li>
                        <li className={footerStyles.footerMenu__item}>
                            <Link className={footerStyles.footerMenu__link} to="/writing">Writing</Link>
                        </li>
                        <li className={footerStyles.footerMenu__item}>
                            <Link className={footerStyles.footerMenu__link} to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        )
    }
}
export default Footer
