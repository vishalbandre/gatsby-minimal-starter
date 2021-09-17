import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
            <p>Cool posts will go here.</p>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql
    `query {
        allFile {
          nodes {
            name
          }
        }
      }
    `

export default BlogPage