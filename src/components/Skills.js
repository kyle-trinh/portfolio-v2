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
      skills: allMdx(filter: { fileAbsolutePath: { regex: "/skills/" } }) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)
  return (
    <Section>
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
            <Text fontSize="24px">Technologies that I'm proficient in</Text>
            <Grid templateColumns="repeat(4, 1fr)" gridGap="20px">
              <MDXRenderer>{data.skills.edges[0].node.body}</MDXRenderer>
            </Grid>
          </VStack>
        </Box>
      </Wrapper>
    </Section>
  )
}
