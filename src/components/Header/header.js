import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import Logo from "../Logo/Logo"
import MainMenu from "../Menu/MainMenu"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.header__branding}>
      <Logo height="50px" />
      <Link className={headerStyles.header__title} to="/">
        {siteTitle}
      </Link>
    </div>
    <MainMenu></MainMenu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
