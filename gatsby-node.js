exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const pageQuery = require.resolve(`./src/templates/pageQuery.js`)
  
    const result = await graphql(`
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
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
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: pageQuery,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }

  exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig()
    if (stage.startsWith('develop') && config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom': '@hot-loader/react-dom'
      }
    }
  }