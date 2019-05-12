import React from "react"
import Layout from "../../components/layout"
import postStyles from "../../templates/post/post.module.css"
const Post = ({ pageContext }) => (
  <Layout mainClass={postStyles.main_post}>
    {
      console.log(pageContext)
    }
    <h1>{pageContext.title}</h1>

    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}>
    </div>
  </Layout>
)

export default Post
