import { Link } from "gatsby"
import React from "react"
import mainMenuStyles from "./MainMenu.module.css"
import MediaQuery from "react-responsive"

class MainMenu extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
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
              <Link className={mainMenuStyles.mainMenu__link} to="/writing">
                Writing
                </Link>
            </li>
            <li className={mainMenuStyles.mainMenu__item}>
              <Link className={mainMenuStyles.mainMenu__link} to="/#contact">
                Contact
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default MainMenu
