import * as React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as blogStyle from "../components/sass/blog.module.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>All Posts</h1>
      <ol className={blogStyle.blogList}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className={blogStyle.blogArticle}
                itemScope
                itemType="http://schema.org/Article"
              >
                <figure className={blogStyle.blogThumbnail}>
                  <img
                    src={post.frontmatter.thumbnail}
                    alt={post.frontmatter.title}
                  />
                </figure>

                <div className={blogStyle.blogDetails}>
                  <header>
                    <small>
                      {post.frontmatter.date} &bull; {post.timeToRead} min read
                    </small>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 150)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          title
          thumbnail
        }
        timeToRead
      }
    }
  }
`
