import React from "react"
import footerStyles from "./footer.module.css"
import MainMenu from "../Menu/MainMenu"

class Footer extends React.Component {
    render() {
        return (
            <footer className={footerStyles.footer}>
                <MainMenu></MainMenu>
                <p className={footerStyles.footer__text}>Built in Gatsby and Wordpress</p>
            </footer>
        )
    }
}
export default Footer
