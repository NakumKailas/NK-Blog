import * as React from "react"
import { Link, graphql } from "gatsby"
import { MdTouchApp } from "react-icons/md"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import * as homeStyle from "../components/sass/index.module.scss"

const homePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className={homeStyle.heroSection}>
        <h1>Hi, my name is </h1>
        <h1>
          <span>{data.site.siteMetadata.title}.</span>
        </h1>
        <p>Professionaly an EC engineer who loves Web technologies, too.</p>
        <Link to="/contact">
          <button>
            Get In Touch <MdTouchApp />
          </button>
        </Link>
      </div>
      <div className={homeStyle.heroBackground}></div>
      <Intro />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default homePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
