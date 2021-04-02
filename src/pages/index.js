import React from "react"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  )
}
