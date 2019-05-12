import React from "react"
import styles from "./Logo.module.css"
const Logo = ({ height }) => (
    <svg className={styles.logo} width="auto" height={height} viewBox="0 0 395 415" fill="black" xmlns="http://www.w3.org/2000/svg">
        <rect y="15" width="125" height="400" />
        <circle cx="270" cy="125" r="125" />
    </svg>
)

export default Logo
