import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  <p>Gatsby is a creature of the modern web––the world of “JAMstack” architecture, static site generators and other newfangled concepts that make websites load faster and run more smoothly. In order to understand Gatsby, we need to pan out slightly and define some of the technologies it rests on, many of which have been shaping the web and web development for the last several years. 

</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
