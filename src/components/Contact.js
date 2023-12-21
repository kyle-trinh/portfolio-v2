import React from "react"
import {
  Box,
  HStack,
  Text,
  Button,
  VStack,
  Icon,
  Stack,
} from "@chakra-ui/react"
import { RiLinkedinFill, RiTwitterFill, RiGithubFill } from "react-icons/ri"
import { Wrapper } from "./Wrapper"
import Section from "./Section"
import ExternalLink from "./ExternalLink"

export default function Contact() {
  return (
    <Section id="contact">
      <Wrapper>
        <Box>
          <Stack
            direction={["column", "column", "column", "row"]}
            bg="blue.700"
            color="white"
            borderRadius="2xl"
            padding="30px 60px"
            justifyContent="space-between"
            alignItems="center"
            spacing={["8px", 0]}
          >
            <Box textAlign={["center", "left"]}>
              <Text fontSize="32px" fontWeight="bold" color="yellow.300">
                Work Inquiry
              </Text>
              <Text>
                If you like my work and want to connect, feel free to email me
              </Text>
              <Text>
                I'm currently looking for either an internship or an entry level
                web development position
              </Text>
            </Box>
            <a href="mailto:kyle.trinh94@gmail.com">
              <Button colorScheme="yellow">LET'S CHAT</Button>
            </a>
          </Stack>
        </Box>
        <Box>
          <VStack spacing="60px" mt="60px" textAlign="center">
            <Box>
              <Text fontSize="32px" fontWeight="bold" mb="8px">
                Stay Connected
              </Text>
              <Text color="gray.500">Long Beach, CA</Text>
              <Text>kyle.trinh94@gmail.com</Text>
            </Box>
            <HStack spacing={8}>
              <ExternalLink href="https://twitter.com/binhthaitrinh">
                <Box
                  _hover={{ bg: "blue.200" }}
                  transition="all 0.2s ease-out"
                  bg="blue.100"
                  borderRadius="50%"
                  padding="6px"
                >
                  <Icon
                    as={RiTwitterFill}
                    width="30px"
                    height="30px"
                    color="blue.600"
                  />
                </Box>
              </ExternalLink>
              <ExternalLink href="https://github.com/kyle-trinh">
                <Box
                  bg="blue.100"
                  borderRadius="50%"
                  padding="6px"
                  _hover={{ bg: "blue.200" }}
                  transition="all 0.2s ease-out"
                >
                  <Icon
                    as={RiGithubFill}
                    width="30px"
                    height="30px"
                    color="blue.600"
                  />
                </Box>
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/binhthaitrinh/">
                <Box
                  bg="blue.100"
                  borderRadius="50%"
                  padding="6px"
                  _hover={{ bg: "blue.200" }}
                  transition="all 0.2s ease-out"
                >
                  <Icon
                    as={RiLinkedinFill}
                    width="30px"
                    height="30px"
                    color="blue.600"
                  />
                </Box>
              </ExternalLink>
            </HStack>
          </VStack>
        </Box>
      </Wrapper>
    </Section>
  )
}
