import { Link } from "gatsby"
import React from "react"
import mainMenuStyles from "./MainMenu.module.css"

class MainMenu extends React.Component {

  render() {
    return (
      <nav>
        <ul className={mainMenuStyles.mainMenu}>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/" activeClassName={mainMenuStyles.mainMenu__link_active}>
              Home
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/about" activeClassName={mainMenuStyles.mainMenu__link_active}>
              About
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/blog" activeClassName={mainMenuStyles.mainMenu__link_active}>
              Blog
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/#contact" activeClassName={mainMenuStyles.mainMenu__link_active}>
              Contact
                </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MainMenu
