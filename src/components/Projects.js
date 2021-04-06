import React from "react"
import { Box, VStack } from "@chakra-ui/react"
import Section from "./Section"
import { Wrapper } from "./Wrapper"
import { SectionTitle, SectionSub } from "./Typography"
import HCard from "./HCard"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___id, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              id
              description
              github
              homepage
              name
              slug
              tech
              title
              cover {
                relativePath
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    height: 400
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section bg="#fafafa" id="about">
      <Wrapper>
        <Box>
          <SectionTitle>Projects</SectionTitle>
          <SectionSub>I build projects to showcase what I learned</SectionSub>
        </Box>
        <VStack spacing={8} mt={8}>
          {data.projects.edges.map((edge, index) => {
            const project = edge.node.frontmatter
            return (
              <HCard
                key={project.id}
                name={project.name}
                description={project.description}
                href={`/projects/${project.slug}`}
                github={project.github}
                homepage={project.homepage}
                technologies={project.tech}
                id={parseInt(project.id)}
                cover={project.cover}
                index={index}
              ></HCard>
            )
          })}
        </VStack>
      </Wrapper>
    </Section>
  )
}
