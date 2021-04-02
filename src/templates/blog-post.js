import React from "react"
import { Box } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  return (
    <Box maxW="800px" w="100%" mx="auto" px="10px" overflow="hidden">
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
      }
      body
    }
  }
`
