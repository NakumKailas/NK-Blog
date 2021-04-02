import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

import * as footerStyle from "./sass/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <footer className={footerStyle.footer}>
      <nav>
        <p>
          {data.site.siteMetadata.title} © {new Date().getFullYear()}.{" "}
          <span>
            Crafted by <a href="https://aniac.tech">ANIAC</a>
          </span>
        </p>
        <div className={footerStyle.socialIcons}>
          <a href="https://www.linkedin.com/in/kailas-nakum/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/_kaileenakum_/">
            <FaInstagram />
          </a>
          <a href="https://github.com/NakumKailas">
            <FaGithub />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
