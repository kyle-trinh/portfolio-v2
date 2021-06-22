import React from "react"
import Nav from "../components/Nav"
import ProjectComponent from "../components/Projects"
import Seo from "../components/seo"

export default function Projects() {
  return (
    <>
      <Seo title="Projects" />
      <Nav />
      <ProjectComponent />
    </>
  )
}
