import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";

const About = ( {data} ) => (
  <Layout>
    <SEO title="About me" keywords={[`gatsby`, `application`, `react`]} />
    <h2>{data.allWordpressPage.edges[0].node.title}</h2>

    <div dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.content}}>
    </div>
  </Layout>
)

export default About

export const query = graphql`
  query {
    allWordpressPage(filter: {slug: {eq: "about-me"}}) {
      edges {
        node {
          id
          title
          excerpt
          slug
          status
          content
        }
      }
    }
  }
`