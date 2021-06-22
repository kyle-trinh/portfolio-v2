import React from "react"
import Blogs from "../components/Blog"
import Contact from "../components/Contact"
import Nav from "../components/Nav"
import Seo from "../components/seo"

export default function Blog() {
  return (
    <>
      <Seo title="Blog" />
      <Nav />
      <Blogs />
      <Contact />
    </>
  )
}
