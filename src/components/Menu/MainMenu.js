import { Link } from "gatsby"
import React from "react"
import mainMenuStyles from "./MainMenu.module.css"
import MediaQuery from "react-responsive"

class MainMenu extends React.Component {
  constructor() {
    super()

    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    if (this.state.isMenuOpen === true) {
      this.setState({ isMenuOpen: false })
    } else {
      this.setState({ isMenuOpen: true })
    }
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width:700px)">
          <nav>
            <button
              onClick={this.toggleMenu}
              className={mainMenuStyles.mainMenu__button}
            >
              Menu
            </button>
            {this.state.isMenuOpen ? (
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
            ) : null}
          </nav>
        </MediaQuery>
        <MediaQuery query="(min-width:700px)">
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
        </MediaQuery>
      </div>
    )
  }
}

export default MainMenu
