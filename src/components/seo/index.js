import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import config from "../../../config/website"

function SEO({
  siteMetadata,
  postData,
  postMeta = {},
  title = postMeta.title || config.siteTitle,
  description = postMeta.description || config.siteDescription,
  url = postMeta.slug
    ? `${siteMetadata.canonicalUrl}/${postMeta.slug}`
    : siteMetadata.canonicalUrl,
  isBlogPost,
}) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="alternate icon" href="/favicon.ico" />
        {/* <meta name="image" content={image} */}

        {/* OpenGrpah tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    </>
  )
}

function SEOWithQuery(props) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author {
            name
            minibio
          }
          social {
            facebook
            linkedin
            github
          }
        }
      }
    }
  `)

  return <SEO siteMetadata={site} {...props} />
}

export default SEOWithQuery
