import * as React from 'react';
import { graphql } from 'gatsby';
import PageHeader from '../components/header';
import "../css/style.css";
import {TestButton} from '../components/buttons'

const HomePage = ({data}) => {
  const wpPage = data.allWpPage.edges[0].node.content
  let wpContent = wpPage.split(",");

  return (
    <div css={"width:100%;"}>
      <PageHeader css={"width:100%;"}/>
      {wpContent.map(content => <div key={content}>
          {content}
          <TestButton />
      </div>
        )}
    </div>
  )
}




export const query = graphql`
query MyQuery {
  allWpPage(limit: 10, filter: {title: {eq: "aTest Page"}}) {
    edges {
      node {
        id
        content
      }
    }
  }
}
`


export default HomePage