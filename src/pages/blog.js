import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import styles from "../pages/styles/writing.module.css"

const Blog = ({ data }) => (
  <Layout mainClass={styles.main_writing}>
    <SEO title="About me" keywords={[`gatsby`, `application`, `react`]} />
    {
      console.log(data.allWordpressPost.edges)
    }
    <h2>Latest Posts</h2>

    {data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={`/blog/${node.slug}/`}>
          <h3>{node.title}</h3>
        </Link>
        <p>Published: {node.date}</p>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} ></div>
      </div>
    ))}
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allWordpressPost {
        edges {
            node {
            id
            title
            slug
            content
            excerpt
            status
            date(formatString: "Do MMMM YYYY")
            }
        }
    }
  }
`
