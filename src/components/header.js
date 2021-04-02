import * as React from "react"
import { Link } from "gatsby"

import Menu from "./menu"
import * as headerStyle from "./sass/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <nav>
        <h1>
          <Link to="/">NK</Link>
        </h1>
        <Menu />
      </nav>
    </header>
  )
}

export default Header
