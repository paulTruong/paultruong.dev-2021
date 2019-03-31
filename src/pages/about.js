import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";

const About = ( {data} ) => (
  <Layout>
    <SEO title="About me" keywords={[`gatsby`, `application`, `react`]} />
    {
      console.log(data.allWordpressPage.edges[0].node)
    }
    <h2>{data.allWordpressPage.edges[0].node.title}</h2>

    <div dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.content}}>
    </div>
  </Layout>
)

export default About

export const query = graphql`
  query {
    allWordpressPage(filter: {id: {eq: "89d77f07-f9a7-5797-9c80-f17b4baf9e22"}}) {
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