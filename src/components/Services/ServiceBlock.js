import React from "react"
import styles from "./ServiceBlock.module.css"

const ServiceBlock = ({title, text}) => (
    <div className={styles.serviceBlock}>
        <h3 className={styles.serviceBlock__title}>{title}</h3>
        <p className={styles.serviceBlock__text}>{text}</p>
    </div>
)

export default ServiceBlock