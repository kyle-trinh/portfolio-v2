import React from "react"
import Skill from "./Skill"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "../mdx"
import Nav from "./Nav"
import { Box } from "@chakra-ui/react"

const shortcodes = { Skill }

export default function Layout({ children }) {
  return (
    <MDXProvider components={{ ...shortcodes, ...mdxComponents }}>
      <Box position="relative" overflow="hidden">
        <Nav />
        {children}
      </Box>
    </MDXProvider>
  )
}
