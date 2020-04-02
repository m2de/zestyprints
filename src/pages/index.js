import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => {
  const instagram = useStaticQuery(graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          username
          caption
          likes
          mediaType
          localFile {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 450) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`)

const images = instagram.allInstaNode.edges.map(({node}) => (
  <a href={`https://instagram.com/p/${node.id}`}><Img loading="eager" critical fadeIn="false" fluid={node.localFile.childImageSharp.fluid} /></a>
))

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: false,
  lazyLoad: 'ondemand',
}

  return (
    <Layout>
      <SEO title="Minimal modern prints and wall art" />
      <Slider {...settings}>
        {images}
      </Slider>
    </Layout>
  )
}

export default IndexPage
