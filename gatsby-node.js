const path = require("path")

async function turnBlogPostIntoPages({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

async function turnProjectToPages({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/project/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    turnBlogPostIntoPages({ graphql, actions }),
    turnProjectToPages({ graphql, actions }),
  ])
}
