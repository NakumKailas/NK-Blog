import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/form"

const contactPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Get In Touch" />
      <h1>Contact Me</h1>
      <ContactForm
        action={`https://www.flexyform.com/f/7d964ca8a6238fdb1ffa12b3485550f2ee2f541c`}
      ></ContactForm>
    </Layout>
  )
}

export default contactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
