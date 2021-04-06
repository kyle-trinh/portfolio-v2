import React from "react"
import Skill from "./Skill"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "../mdx"
import Nav from "./Nav"

const shortcodes = { Skill }

export default function Layout({ children }) {
  return (
    <MDXProvider components={{ ...shortcodes, ...mdxComponents }}>
      <Nav />
      {children}
    </MDXProvider>
  )
}
