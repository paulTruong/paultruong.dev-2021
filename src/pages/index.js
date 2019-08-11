import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import ServiceBlock from "../components/Services/ServiceBlock";
import ContactForm from "../components/Forms/Contact/ContactForm"
import indexStyles from "./styles/index.module.css"

const IndexPage = ({ data }) => (
  <Layout mainClass="main_home">
    {
      console.log(data.allWordpressPage.edges[0].node.acf.wordpress_fields_page)
    }
    {
      console.log(data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[1].image.source_url)
    }
    <SEO title={data.allWordpressPage.edges[0].node.title} keywords={[`gatsby`, `application`, `react`]} />
    <section className={indexStyles.hero__section}>
      <div className={indexStyles.hero__tagline} dangerouslySetInnerHTML={{ __html: data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[0].tagline }}></div>
      <div className={indexStyles.hero__text} dangerouslySetInnerHTML={{ __html: data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[2].text_block }}></div>
      <img className={indexStyles.hero__image} src={data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[1].image.source_url} alt="" />
    </section>
    <div className={indexStyles.home__services}>
      <h2 className={indexStyles.home__services_heading}>{data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[3].heading}</h2>
      {
        data.allWordpressPage.edges[0].node.acf.wordpress_fields_page[4].service_block.map((serviceBlock) => {
          return <ServiceBlock key={serviceBlock.title} title={serviceBlock.title} text={serviceBlock.text} />
        })

      }
      {/* </div> */}
    </div>
    <h2 id="contact" className={indexStyles.home__heading}>Contact me</h2>
    <div className={indexStyles.contact__text}>
      <h3>Availability - small projects and helping hand</h3>
      <p>Right now I am available for around 20 hours a week. Perfect if you have a smaller project or need a little extra help with your website.</p>
      <p>Just fill out the contact form or send me an <a href="mailto:paul@paultruong.dev">email</a> and we can organise a chat to see what I can do for you.</p>
    </div>
    <ContactForm />

  </Layout>
)

export const query = graphql`
  query {
    allWordpressPage(filter: {slug: {eq: "home"}}) {
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
              ... on WordPressAcf_image {
                image {
                  source_url
                }
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
