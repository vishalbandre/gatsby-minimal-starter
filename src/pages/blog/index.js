import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                        <p>Posted: {node.frontmatter.date}</p>
                        {node.id}
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql
    `
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
            id
            slug
          }
        }
      }
      
    `

export default BlogPage