import React from "react"
import { Box } from "@chakra-ui/react"
import { Wrapper } from "../components/Wrapper"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPost({ data }) {
  console.log(data)
  return (
    <Wrapper>
      <Box>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Box>
    </Wrapper>
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
