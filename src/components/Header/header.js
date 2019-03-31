import PropTypes from "prop-types"
import React from "react"
import Logo from "../Logo/Logo"
import MainMenu from "../Menu/MainMenu"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
      <Logo siteTitle={siteTitle}></Logo>
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
