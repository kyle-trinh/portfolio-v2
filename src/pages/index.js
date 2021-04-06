import React from "react"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Header />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </Layout>
  )
}
