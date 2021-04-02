import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import * as headerStyle from "./sass/header.module.scss"

class navBar extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    const menuStyle = {
      bmBurgerButton: {
        position: "relative",
        width: "30px",
        height: "25px",
      },
      bmBurgerBars: {
        background: "#297ea6",
        height: "10%",
      },
      bmBurgerBarsHover: {
        background: "#00101c",
      },
      bmCrossButton: {
        height: "24px",
        width: "24px",
      },
      bmCross: {
        background: "#f9f9f9",
        height: "20px",
      },
      bmMenuWrap: {
        position: "fixed",
        top: 0,
        height: "100%",
        width: "300px",
      },
      bmMenu: {
        background: "#00101c",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
      },
      bmMorphShape: {
        fill: "#373a47",
      },
      bmItemList: {
        color: "#f9f9f9",
        padding: "1rem",
      },
      bmItem: {
        display: "inline-block",
        outline: "none",
      },
      bmOverlay: {
        background: "transparent",
      },
    }

    return (
      <Menu styles={menuStyle} right>
        <ul className={headerStyle.navList}>
          <li>
            <Link activeClassName={headerStyle.activeLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyle.activeLink} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyle.activeLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </Menu>
    )
  }
}

export default navBar
