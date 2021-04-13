import React from "react"
import {
  Box,
  Flex,
  UnorderedList,
  ListItem,
  Link,
  Text,
  HStack,
  VStack,
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
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <Box
      as="nav"
      py={4}
      color={variant === "dark" ? "gray.700" : "white"}
      {...props}
    >
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="mailto:trinhthaibinh.ecom@gmail.com" zIndex="1000">
            <HStack>
              <Icon
                as={RiMailSendLine}
                w={10}
                h={10}
                border="1px solid #CBD5E0"
                borderRadius="50%"
                padding="8px 8px"
              />
              <Text
                fontWeight="600"
                marginLeft={6}
                display={["none", "inline-block"]}
              >
                trinhthaibinh.ecom@gmail.com
              </Text>
            </HStack>
          </Link>
          <Box
            position="absolute"
            top="25px"
            right="25px"
            display={["block", "none"]}
            onClick={() => setShowMenu(show => !show)}
            zIndex="1000"
          >
            <VStack spacing="4px">
              <Box
                width="24px"
                height="3px"
                bg={showMenu ? "white" : "gray.600"}
                transform={
                  !showMenu ? "" : "rotate(-45deg) translate(-2px, 4px)"
                }
                transition="all 0.2s ease-out"
              ></Box>
              <Box
                width="24px"
                height="3px"
                bg="gray.600"
                visibility={showMenu ? "hidden" : "visible"}
              ></Box>
              <Box
                width="24px"
                height="3px"
                bg={showMenu ? "white" : "gray.600"}
                transform={
                  showMenu ? "rotate(45deg) translate(-3px, -4px)" : ""
                }
                transition="all 0.2s ease-out"
              ></Box>
            </VStack>
          </Box>
          <UnorderedList
            listStyleType="none"
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent={["center", "flex-end"]}
            alignItems="flex-end"
            position={["absolute", "relative"]}
            height={["100vh", "auto"]}
            width="min(80%, 400px)"
            bg={["blue.500", "transparent"]}
            color={["white", "gray.600"]}
            top={["0", "auto"]}
            transform={[`translateX(${showMenu ? "0px" : "50vw"})`, "none"]}
            transition="all 0.3s ease-out"
            visibility={[showMenu ? "visible" : "hidden", "visible"]}
            opacity={[showMenu ? "100%" : "0%", "100%"]}
            right={["0", "auto"]}
            ml="0"
            zIndex="999"
            py="8px"
            pr={["30px", "0px"]}
          >
            {navs.map(navItem => (
              <ListItem key={navItem.title} mb={["24px", "0px"]}>
                <Link
                  as={GatsbyLink}
                  to={navItem.url}
                  fontWeight="600"
                  textDecor="none"
                  p={["0px", "0px", "2px 8px", "6px 12px"]}
                  height="100%"
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
            <ListItem key="resume">
              <Link
                href="/resume.pdf"
                border={[
                  "2px solid white",
                  "1px solid var(--chakra-colors-gray-600)",
                ]}
                padding="8px 10px"
                fontWeight="600"
                borderRadius="md"
              >
                Resume
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Wrapper>
    </Box>
  )
}
