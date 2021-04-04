import React from "react"
import { Box } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Title } from "../components/Typography"
import Markdown from "react-markdown"

export default function BlogPost({ data }) {
  const image = getImage(data.mdx.frontmatter.banner)
  return (
    <Box
      maxW="800px"
      w="100%"
      mx="auto"
      px="10px"
      overflow="hidden"
      as="article"
    >
      <Title textAlign="center">{data.mdx.frontmatter.title}</Title>
      {image ? (
        <Box textAlign="center">
          <GatsbyImage image={image} />
          {data.mdx.frontmatter.bannerCredit && (
            <Markdown>{data.mdx.frontmatter.bannerCredit}</Markdown>
          )}
        </Box>
      ) : null}
      <Box>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Box>
    </Box>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        description
        bannerCredit
        keywords
        banner {
          childImageSharp {
            gatsbyImageData(quality: 60, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`
