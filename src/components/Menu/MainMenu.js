import { Link } from "gatsby"
import React from "react"
import mainMenuStyles from "./MainMenu.module.css"

class MainMenu extends React.Component {

  render() {
    return (
      <nav>
        <ul className={mainMenuStyles.mainMenu}>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/" activeStyle={{ borderBottom: "3px hsl(28, 100%, 58%) solid" }}>
              Home
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/about" activeStyle={{ borderBottom: "3px hsl(28, 100%, 58%) solid" }}>
              About
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/blog" activeStyle={{ borderBottom: "3px hsl(28, 100%, 58%) solid" }}>
              Blog
                </Link>
          </li>
          <li className={mainMenuStyles.mainMenu__item}>
            <Link className={mainMenuStyles.mainMenu__link} to="/#contact" activeStyle={{ borderBottom: "3px hsl(28, 100%, 58%) solid" }}>
              Contact
                </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MainMenu
