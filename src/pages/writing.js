import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link, graphql } from "gatsby"

const Writing = ( {data} ) => (
  <Layout>
    <SEO title="About me" keywords={[`gatsby`, `application`, `react`]} />
    {
      console.log(data.allWordpressPost.edges)
    }
    <h2>Latest Posts</h2>

    { data.allWordpressPost.edges.map(({node}) => (
        <div key={node.id}>
            <Link to={node.slug}>
                <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{__html:node.excerpt}} ></div>
        </div>
    )) }
  </Layout>
)

export default Writing

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
            }
        }
    }
  }
`