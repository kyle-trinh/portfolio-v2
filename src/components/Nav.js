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
  Stack,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { Wrapper } from "./Wrapper"
import { RiMailSendLine } from "react-icons/ri"
import useOnClickOutside from "../hooks/useOnClickOutside"
import { useRef } from "react"

const navs = [
  {
    title: "Home",
    url: "/",
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
  {
    title: "Contact",
    url: "/#contact",
  },
]

export default function Nav({ variant = "dark", ...props }) {
  const [showMenu, setShowMenu] = React.useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setShowMenu(false))

  return (
    <Box
      as="nav"
      py={4}
      color={variant === "dark" ? "gray.700" : "white"}
      {...props}
    >
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between" ref={ref}>
          <Link href="mailto:kyle.trinh94@gmail.com" zIndex="1000">
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
                kyle.trinh94@gmail.com
              </Text>
            </HStack>
          </Link>
          <Box
            position="fixed"
            top="25px"
            right="25px"
            display={["block", "none"]}
            onClick={() => setShowMenu(!showMenu)}
            zIndex="1000"
            id="hamBtn"
          >
            <VStack spacing="4px">
              <Box
                width="24px"
                height="3px"
                bg={
                  variant !== "dark" ? "white" : showMenu ? "white" : "gray.600"
                }
                transform={
                  !showMenu ? "" : "rotate(-45deg) translate(-4px, 4px)"
                }
                transition="all 0.2s ease-out"
              ></Box>
              <Box
                width="24px"
                height="3px"
                bg={
                  variant !== "dark" ? "white" : showMenu ? "white" : "gray.600"
                }
                visibility={showMenu ? "hidden" : "visible"}
              ></Box>
              <Box
                width="24px"
                height="3px"
                bg={
                  variant !== "dark" ? "white" : showMenu ? "white" : "gray.600"
                }
                transform={
                  showMenu ? "rotate(45deg) translate(-5px, -6px)" : ""
                }
                transition="all 0.2s ease-out"
              ></Box>
            </VStack>
          </Box>
          <Stack
            as={UnorderedList}
            listStyleType="none"
            display={[
              showMenu ? "flex" : "none",
              showMenu ? "flex" : "none",
              "flex",
            ]}
            direction={["column", "row"]}
            justifyContent={["center", "flex-end"]}
            boxShadow={showMenu && "-2px -2px 10px rgba(0,0,0,0.2)"}
            alignItems="flex-end"
            position={["fixed", "relative"]}
            height={["100vh", "auto"]}
            width="min(80%, 400px)"
            bg={["blue.500", "transparent"]}
            color={["white", variant === "light" ? "white" : "gray.600"]}
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
                  p={["2px 8px", "2px 8px", "2px 8px", "6px 12px"]}
                  height="100%"
                  borderRadius={4}
                  _hover={{
                    textDecor: "none",
                    backgroundColor: showMenu
                      ? "var(--chakra-colors-blue-400)"
                      : variant === "dark"
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
                  `2px solid white`,
                  `1px solid ${
                    variant === "light"
                      ? "white"
                      : "var(--chakra-colors-gray-600)"
                  }`,
                ]}
                padding="8px 10px"
                fontWeight="600"
                borderRadius="md"
              >
                Resume
              </Link>
            </ListItem>
          </Stack>
        </Flex>
      </Wrapper>
    </Box>
  )
}
