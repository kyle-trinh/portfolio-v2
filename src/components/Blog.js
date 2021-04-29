import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Grid, Text, VStack, Tag, HStack, Tooltip } from "@chakra-ui/react"
import Section from "./Section"
import { SectionTitle, SectionSub } from "./Typography"
import { Wrapper } from "./Wrapper"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query Blogs {
      blogs: allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              author
              keywords
              banner {
                childImageSharp {
                  gatsbyImageData(quality: 60, placeholder: BLURRED)
                }
              }
            }
            excerpt(pruneLength: 100)
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Wrapper>
        <Box>
          <SectionTitle>Blog Posts</SectionTitle>
          <SectionSub>This is where I write blogs</SectionSub>
        </Box>
        <Box mt="16px">
          <Grid
            gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gridGap="20px"
            gridAutoRows="1fr"
          >
            {data.blogs.edges.map(edge => {
              const { frontmatter, excerpt } = edge.node
              const image = getImage(frontmatter.banner)
              return (
                <VStack
                  key={frontmatter.slug}
                  alignItems="flex-start"
                  spacing="0"
                >
                  <Link to={`/blog/${frontmatter.slug}`}>
                    <GatsbyImage
                      image={image}
                      alt={frontmatter.title}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        borderTopRightRadius: "8px",
                        borderTopLeftRadius: "8px",
                      }}
                    />
                  </Link>
                  <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    padding="16px 12px 20px 12px"
                    borderBottomRightRadius="8px"
                    borderBottomLeftRadius="8px"
                    height="100%"
                  >
                    <VStack
                      alignItems="flex-start"
                      flex={1}
                      justifyContent="stretch"
                    >
                      <HStack flexWrap="wrap">
                        {frontmatter.keywords &&
                          frontmatter.keywords.map(tag => (
                            <Tag
                              size="md"
                              key={tag}
                              variant="outline"
                              colorScheme="gray"
                              whiteSpace="nowrap"
                              mb="6px"
                            >
                              {tag}
                            </Tag>
                          ))}
                      </HStack>
                      <Text as="time" color="gray.500">
                        {frontmatter.date}
                      </Text>
                      <Link to={`/blog/${frontmatter.slug}`}>
                        <Text
                          as="h6"
                          fontSize="24px"
                          fontWeight="bold"
                          color="gray.600"
                          lineHeight={1}
                        >
                          <Tooltip
                            label={frontmatter.title}
                            isDisabled={frontmatter.title.length <= 30}
                            hasArrow
                            placement="top"
                          >
                            {frontmatter.title.length > 30
                              ? `${frontmatter.title.slice(0, 30)}...`
                              : frontmatter.title}
                          </Tooltip>
                        </Text>
                      </Link>
                      <Text color="gray.500">By {frontmatter.author}</Text>

                      <Text>{excerpt}</Text>
                    </VStack>
                  </Box>
                </VStack>
              )
            })}
          </Grid>
        </Box>
      </Wrapper>
    </Section>
  )
}
