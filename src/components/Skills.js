import React from "react"
import { Wrapper } from "./Wrapper"
import Section from "./Section"
import { SectionTitle, SectionSub } from "./Typography"
import { Box, Grid, Text, VStack } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Skills() {
  const data = useStaticQuery(graphql`
    query SkillQuery {
      skills: allMdx(
        filter: { fileAbsolutePath: { regex: "/skills/" } }
        sort: { fields: frontmatter___id }
      ) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)
  return (
    <Section id="skills">
      <Wrapper>
        <Box>
          <SectionTitle>Skills</SectionTitle>
          <SectionSub>
            A list of languages, libraries and framworkds that I have had the
            opportunity to work with
          </SectionSub>
        </Box>
        <Box>
          <VStack
            width="100%"
            mt="40px"
            textAlign="center"
            alignItems="stretch"
            spacing="20px"
          >
            <Box>
              <Text fontSize="24px">Technologies that I'm proficient in</Text>
              <Grid
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gridGap="20px"
                mt="20px"
              >
                <MDXRenderer>{data.skills.edges[0].node.body}</MDXRenderer>
              </Grid>
            </Box>
            <Box>
              <Text fontSize="24px">Technologies that I'm familiar with</Text>
              <Grid
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gridGap="20px"
                mt="20px"
              >
                <MDXRenderer>{data.skills.edges[1].node.body}</MDXRenderer>
              </Grid>
            </Box>
            <Box>
              <Text fontSize="24px">And exploring</Text>
              <Grid
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gridGap="20px"
                mt="20px"
              >
                <MDXRenderer>{data.skills.edges[2].node.body}</MDXRenderer>
              </Grid>
            </Box>
          </VStack>
        </Box>
      </Wrapper>
    </Section>
  )
}
