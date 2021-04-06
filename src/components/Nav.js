import React from "react"
import {
  Box,
  Flex,
  UnorderedList,
  ListItem,
  Link,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { Wrapper } from "./Wrapper"
import { RiMailSendLine } from "react-icons/ri"

const navs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Skills",
    url: "/#skills",
  },
  {
    title: "Blog",
    url: "/blog",
  },
]

export default function Nav({ variant = "dark", ...props }) {
  return (
    <Box
      as="nav"
      py={4}
      color={variant === "dark" ? "gray.700" : "white"}
      {...props}
    >
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="mailto:trinhthaibinh.ecom@gmail.com">
            <HStack>
              <Icon
                as={RiMailSendLine}
                w={10}
                h={10}
                border="1px solid #CBD5E0"
                borderRadius="50%"
                padding="8px 8px"
              />
              <Text fontWeight="600" marginLeft={6} display="inline-block">
                trinhthaibinh.ecom@gmail.com
              </Text>
            </HStack>
          </Link>
          <UnorderedList listStyleType="none">
            <HStack spacing={6}>
              {navs.map(navItem => (
                <ListItem key={navItem.title}>
                  <Link
                    as={GatsbyLink}
                    to={navItem.url}
                    fontWeight="600"
                    textDecor="none"
                    p="6px 12px"
                    borderRadius={4}
                    _hover={{
                      textDecor: "none",
                      backgroundColor:
                        variant === "dark"
                          ? "var(--chakra-colors-blue-50)"
                          : "var(--chakra-colors-blue-400)",
                    }}
                  >
                    {navItem.title}
                  </Link>
                </ListItem>
              ))}
            </HStack>
          </UnorderedList>
        </Flex>
      </Wrapper>
    </Box>
  )
}
