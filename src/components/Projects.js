import React from "react"
import { Box, VStack, Button } from "@chakra-ui/react"
import Section from "./Section"
import { Wrapper } from "./Wrapper"
import { SectionTitle, SectionSub } from "./Typography"
import HCard from "./HCard"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      projects: allMarkdownRemark(
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
  console.log(data)
  return (
    <Section bg="#fafafa">
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
                href={`/blogs/${project.id}`}
                github={project.github}
                homepage={project.homepage}
                technologies={project.tech}
                id={parseInt(project.id)}
                cover={project.cover}
                index={index}
              ></HCard>
            )
          })}
          <Link to="/projects">
            <Button>More</Button>
          </Link>
        </VStack>
      </Wrapper>
    </Section>
  )
}
