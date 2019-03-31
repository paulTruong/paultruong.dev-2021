import React from "react"
import { Link } from "gatsby"
import logoStyles from "./Logo.module.css"

const Logo = ({siteTitle}) => (
    <div className={logoStyles.logo}>
        <Link className={logoStyles.logo__link} to="/">
            {siteTitle}
        </Link>
    </div>
)

export default Logo