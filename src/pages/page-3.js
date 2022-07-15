import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <motion.div layoutId={`item-2`} style={{ backgroundColor: "darkseagreen" }}>
      <h1>Hi from the third page</h1>
      <p>Welcome to page 3</p>
      <Link to="/">Go back to the homepage</Link>
    </motion.div>
  </Layout>
)

export default ThirdPage
