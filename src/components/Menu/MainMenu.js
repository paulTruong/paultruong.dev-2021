import { Link } from "gatsby"
import React from "react"
import mainMenuStyles from "./MainMenu.module.css"

class MainMenu extends React.Component {

  render() {
    return (
      <nav>
        <ul className={mainMenuStyles.mainMenu}>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/">
              Home
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/about">
              About
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/blog">
              Blog
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/#contact">
              Contact
                </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MainMenu
