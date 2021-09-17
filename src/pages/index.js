import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to Gatsby Apps.</p>
      <StaticImage
        alt="Nature"
        src="../images/image.jpg"
      />
    </Layout>
  )
}

export default IndexPage