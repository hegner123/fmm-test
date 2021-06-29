import * as React from 'react';
import { graphql } from 'gatsby';
import PageHeader from '../components/header';

const HomePage = ({data}) => {
  const wpPage = data.allWpPage.edges[0].node.content
  let wpContent = wpPage.split(",");

  return (
    <div>
      <PageHeader/>
      <a href="/graphicDesign">Graphic Design</a>
      {map}
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