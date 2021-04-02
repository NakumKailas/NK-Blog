import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import "../style/index.scss"
import * as layoutStyle from "../components/sass/layout.module.scss"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <main data-is-root-path={isRootPath}>
      <Header />
      <section className={layoutStyle.contentSection}>
        <div className={layoutStyle.content}>{children}</div>
      </section>
      <Footer />
    </main>
  )
}

export default Layout
