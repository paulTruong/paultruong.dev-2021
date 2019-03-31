import React from "react"
import Layout from "../components/layout"

const Post = ( {pageContext} ) => (
  <Layout>
    {
      console.log(pageContext)
    }
    <h1>{pageContext.title}</h1>

    <div dangerouslySetInnerHTML={{__html: pageContext.content}}>
    </div>
  </Layout>
)

export default Post