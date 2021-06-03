import React from "react"
import { graphql } from "gatsby"
import { Box, HStack, Icon, Stack, Tag } from "@chakra-ui/react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Nav from "../components/Nav"
import { Title, Paragraph } from "../components/Typography"
import { FaGithub, FaLink } from "react-icons/fa"
import { MDXRenderer } from "gatsby-plugin-mdx"
import mdxComponents from "../mdx"
import { MDXProvider } from "@mdx-js/react"
import SEO from "../components/seo"
import Contact from "../components/Contact"

export default function Project({ data }) {
  const image = getImage(data.mdx.frontmatter.mockup)

  return (
    <MDXProvider components={mdxComponents}>
      <SEO
        postMeta={{
          title: `${data.mdx.frontmatter.name} | Binh Trinh Project`,
        }}
      />
      <Box>
        <Box bg="blue.500" color="white" pb="36px" px="15px">
          <Box w="100%" mx="auto" overflow="hidden" maxW="960px">
            <Nav variant="light" />
            <Stack
              direction={["column", "row"]}
              justifyContent="space-between"
              spacing="72px"
            >
              <Box>
                <Title>{data.mdx.frontmatter.name}</Title>
                <Stack direction={["column", "row"]} mt={["16px"]}>
                  {data.mdx.frontmatter.tech.map(item => (
                    <Tag bg="white" color="gray.600">
                      {item}
                    </Tag>
                  ))}
                </Stack>
                <Paragraph my={["8px"]}>
                  {data.mdx.frontmatter.description}
                </Paragraph>
                <HStack spacing="24px">
                  <Icon as={FaGithub} width="32px" height="32px" />
                  <Icon as={FaLink} width="32px" height="32px" />
                </HStack>
              </Box>
              <Box w={["100%", "350px"]} flex="0 0 auto">
                <GatsbyImage image={image} />
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box py="24px">
          <Box width="100%" maxW="960px" overflow="hidden" mx="auto">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Box>
        </Box>
      </Box>
      <Contact />
    </MDXProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        description
        github
        homepage
        tech
        mockup {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 400, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`
