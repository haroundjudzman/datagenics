import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { 
  FooterWrapper, 
  FooterSocialWrapper, 
  FooterSocialIcons } from "../elements"

export const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: {eq: "twitter.svg"}) {
        publicURL
      }
      github: file(relativePath: {eq: "github.svg"}) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="Twitter Logo"></img>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={data.github.publicURL} alt="Twitter Logo"></img>
          </a>
        </FooterSocialIcons>
        <p>© 2020 Datagenics. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}