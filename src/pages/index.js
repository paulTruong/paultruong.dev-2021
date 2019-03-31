import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import ServiceBlock from "../components/Services/ServiceBlock";

const IndexPage = ( {data} ) => (
  <Layout>
    {    
      console.log(data.allWordpressPage.edges[0].node.acf.wordpress_fields_page)
    }
    <SEO title={data.allWordpressPage.edges[0].node.title} keywords={[`gatsby`, `application`, `react`]} />
    <h2>{data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[0].tagline}</h2>

    <div dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[1].text_block}}>  
    </div>

    <h2>{data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[2].heading}</h2>
    {
      data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[3].service_block.map( (serviceBlock) => {
        return <ServiceBlock title={serviceBlock.title} text={serviceBlock.text} />
      } )
    }
  </Layout>
)

export const query = graphql`
  query {
    allWordpressPage(filter: {id: {eq: "e3346acb-390c-5567-b18b-bcca163320ee"}}) {
      edges {
        node {
          id
          title
          excerpt
          slug
          status
          date(formatString: "MMMM DD, YYYY")
          acf {
            wordpress_fields_page {
              __typename
              ... on WordPressAcf_tagline {
                tagline
              }
              ... on WordPressAcf_text_block {
                text_block
              }
              ... on WordPressAcf_heading {
                heading
              }
              ... on WordPressAcf_services {
                service_block {
                  title
                  text
                }
              }
            }
          }
        }
      }
    }
  }  
` 
export default IndexPage