/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

import { Global } from "@emotion/core"
import { Body } from '../styles/global'
import { Top, Bottom, Middle, Vertical, Square } from '../components/elements'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Wrapper = tw.div`flex flex-col w-screen h-screen justify-between items-center`

  return (
    <Wrapper>
      <Global styles={Body}></Global>
      <Top><Link to="/">zestyprints</Link></Top>
      <Middle>
        <Vertical><Link to="shop">shop</Link></Vertical>
        <Square>{children}</Square>
        <Vertical><Link to="info">info</Link></Vertical>
      </Middle>
      <Bottom>
        <a href="https://www.instagram.com/zestyprints/">instagram</a>
      </Bottom>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
