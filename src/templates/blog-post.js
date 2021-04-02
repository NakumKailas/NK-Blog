import * as React from "react"
import { Link, graphql } from "gatsby"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as blogStyle from "../components/sass/blog.module.scss"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <p className={blogStyle.backToBlogs}>
        <Link to="/blog">
          <span>
            <BsArrowLeft />
          </span>{" "}
          All Post
        </Link>
      </p>
      <article
        className={blogStyle.blogPostArticle}
        itemScope
        itemType="http://schema.org/Article"
      >
        <figure className={blogStyle.blogPostThumbnail}>
          <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
        </figure>

        <div>
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>
              {post.frontmatter.date} &bull; {post.timeToRead} min read
            </p>
          </header>
          <hr />
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
            <Bio />
          </footer>
        </div>
      </article>
      {/* Navbar control for posts */}
      <nav className={blogStyle.blogPostNavbar}>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <span>
                  <BsArrowLeft />
                </span>
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}{" "}
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        thumbnail
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
