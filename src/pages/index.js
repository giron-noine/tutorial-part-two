import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

import Header from "../components/header"

export default function Home({ data }) {
  console.log(data)
  return (
    <Header>
    <Layout>
      <div>
        <h1 css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}>
          Amazing Pandas Rating Things
        </h1>
          <h4>{data.allMarkdownRemark.totalCount} Post</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
              `}>
              {node.frontmatter.title}{" "}
              <span
                css={css`
                color: #bbb;
              `}>
              - {node.frontmatter.data}
              </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
      </div>
    </Layout>
    </Header>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            data(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`