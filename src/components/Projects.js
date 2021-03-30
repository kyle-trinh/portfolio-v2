import React from "react"
import { Box, VStack, Text, Icon, HStack, Button } from "@chakra-ui/react"
import Section from "./Section"
import { Wrapper } from "./Wrapper"
import { SectionTitle, SectionSub } from "./Typography"
import HCard from "./HCard"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithub, FaLink } from "react-icons/fa"
import ExternalLink from "./ExternalLink"
import { Link } from "gatsby"

export default function Projects() {
  return (
    <Section bg="#fafafa">
      <Wrapper>
        <Box>
          <SectionTitle>Projects</SectionTitle>
          <SectionSub>I build projects to showcase what I learned</SectionSub>
        </Box>
        <VStack spacing={8} mt={8}>
          <HCard>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              paddingLeft="60px"
            >
              <Text
                fontWeight="bold"
                fontSize="32px"
                color="gray.600"
                _after={{
                  content: '""',
                  display: "block",
                  height: "4px",
                  width: "60px",
                  backgroundColor: "blue.400",
                }}
              >
                theMovieDB
              </Text>
              <Text my="12px">
                Browse your favorite Movies, TV shows, and actors. Search for
                specific movies, shows or actors by date, rating, region and
                other categories. Browse the latest and greatest films and to
                find information about its actors...
              </Text>
              <Text color="gray.400">React - Redux - TMDB API - Sass </Text>
              <Link href="/blog/123">
                <Button variant="outline" mt="8px">
                  Read more
                </Button>
              </Link>
              <HStack mt="16px" spacing="16px">
                <ExternalLink href="https://github.com/binhthaitrinh/moviedb-2">
                  <Icon
                    as={FaGithub}
                    width="28px"
                    height="28px"
                    _hover={{ color: "blue.400" }}
                    transition="all 500ms ease-out"
                    color="gray.600"
                  />
                </ExternalLink>
                <ExternalLink href="http://www.themoviedb.me/">
                  <Icon
                    as={FaLink}
                    width="28px"
                    height="28px"
                    _hover={{ color: "blue.400" }}
                    transition="all 500ms ease-out"
                    color="gray.600"
                  />
                </ExternalLink>
              </HStack>
            </Box>
            <Link href="/blog/123">
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                bg="gray.200"
                borderRadius="3xl"
                _hover={{ bg: "yellow.200" }}
                transition="all 0.5s ease-out"
              >
                <StaticImage
                  src="../assets/images/themoviedb.png"
                  alt="binh trinh"
                  placeholder="blurred"
                  layout="constrained"
                  width={550}
                  height={400}
                  quality={100}
                  style={{ borderRadius: "20px" }}
                />
              </Box>
            </Link>
          </HCard>
          <HCard>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              bg="gray.200"
              borderRadius="3xl"
            >
              <StaticImage
                src="../assets/images/themoviedb.png"
                alt="binh trinh"
                placeholder="blurred"
                layout="constrained"
                width={550}
                height={400}
                quality={100}
                style={{ borderRadius: "20px" }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              paddingRight="60px"
            >
              <Text fontWeight="bold" fontSize="32px">
                theMovieDB
              </Text>
              <Text>
                Browse your favorite Movies, TV shows, and actors. Search for
                specific movies, shows or actors by date, rating, region and
                other categories. Browse the latest and greatest films and to
                find information about its actors, crew, and reviews...
              </Text>
            </Box>
          </HCard>
        </VStack>
      </Wrapper>
    </Section>
  )
}
