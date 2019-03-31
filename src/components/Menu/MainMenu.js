import { Link } from "gatsby"
import React from "react"
import mainMenuStyles from "./MainMenu.module.css"

class MainMenu extends React.Component {  
    constructor() {
        super();

        this.state = {
            isMenuOpen: false,
            // screenWidth: 0,
        };

        // getWindowWidth();    
        // if(screenWidth > 700) {
        //     this.setState({isMenuOpen:true});
        // }
    }
    
    // getWindowWidth = () => {
    //     this.setState({screenWidth: window.innerWidth});
    // }

    toggleMenu = () => {
        if(this.state.isMenuOpen === true) {
            this.setState({isMenuOpen: false});
        } else {
            this.setState({isMenuOpen: true});
        }
    }

    render() {
        return (
            <nav>
                <button 
                    onClick={this.toggleMenu} 
                    className={mainMenuStyles.mainMenu__button}>
                    Menu</button>
            {
                this.state.isMenuOpen 
                    ? (
                    <ul className={mainMenuStyles.mainMenu}>
                        <li className={mainMenuStyles.mainMenu__item}>
                            <Link className={mainMenuStyles.mainMenu__link} to="/">Home</Link>
                        </li>
                        <li className={mainMenuStyles.mainMenu__item}>
                            <Link className={mainMenuStyles.mainMenu__link} to="/about">About</Link>
                        </li>
                        <li className={mainMenuStyles.mainMenu__item}>
                            <Link className={mainMenuStyles.mainMenu__link} to="/writing">Writing</Link>
                        </li>
                        <li className={mainMenuStyles.mainMenu__item}>
                            <Link className={mainMenuStyles.mainMenu__link} to="/">Contact</Link>
                        </li>
                    </ul>
                    ) 
                    : (
                        null
                    )
            }    
            </nav>
        )
    }
}

export default MainMenu