import React from "react"
import Layout from "../../components/layout"
import postStyles from "../../templates/post/post.module.css"
import Prism from "prismjs";
import SEO from "../../components/seo"

// require("prismjs/plugins/line-numbers/prism-line-numbers.css")
// require("prismjs/themes/prism-tomorrow.css")

//Refactor to turn into a standard render component
class Post extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { pageContext } = this.props;
    return (
      <Layout mainClass={postStyles.main_post}>
        <SEO title={pageContext.title} keywords={[`gatsby`, `application`, `react`]} />

        <h1>{pageContext.title}</h1>
        <div>{pageContext.date}</div>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}>
        </div>
      </Layout>
    )
  }

}

export default Post
