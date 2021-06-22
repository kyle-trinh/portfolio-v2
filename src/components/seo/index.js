import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  siteMetadata,
  postData,
  postMeta = {},
  title = postMeta.title || siteMetadata.title,
  description = postMeta.description || siteMetadata.description,
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
        <meta property="og:image" content="/images/metaImage.jpg" />
        <meta property="og:url" content={url} />
        <meta property="twitter:tittle" content={title} />
        <meta property="twitter:description" content={description} />
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

  return <SEO siteMetadata={site.siteMetadata} {...props} />
}

export default SEOWithQuery
