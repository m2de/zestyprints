import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { Square } from '../components/elements'

const InfoPage = () => {
  return (
    <Layout>
      <SEO title="Buy minimal modern prints" />
      <Square>
        <a href="https://www.etsy.com/uk/shop/zestyprintsUK">etsy</a>
        <a href="https://ebay.us/Jwq4qA">ebay</a>
      </Square>
    </Layout>
  )
}

export default InfoPage
