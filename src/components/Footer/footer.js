import React from "react"
import footerStyles from "./footer.module.css"
import MainMenu from "../Menu/MainMenu"
import twitterLogo from "../../images/logos/Twitter_Logo_Blue.svg"
import githubLogo from "../../images/logos/github.svg"

class Footer extends React.Component {
    render() {
        return (
            <footer className={footerStyles.footer}>
                <MainMenu></MainMenu>
                <div className={footerStyles.footer__notes}>
                    <p className={footerStyles.footer__text}>Built in <a className={footerStyles.footer__link_gatsby} href="https://www.gatsbyjs.org/">Gatsby</a> and Wordpress</p>
                    <div className={footerStyles.footer__logos}>
                        <a className={footerStyles.footer__link_logo} href="https://twitter.com/mrpaultruong"><img className={footerStyles.footer__logo} src={twitterLogo} alt="Twitter Logo"></img></a>
                        <a className={footerStyles.footer__link_logo} href="https://github.com/paulTruong"><img className={footerStyles.footer__logo} src={githubLogo} alt="Github Logo"></img></a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer
