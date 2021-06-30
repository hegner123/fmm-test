import * as React from 'react';
import { graphql } from 'gatsby';
import PageHeader from '../components/header';
import "../css/style.css";
import { Row } from '../components/elements';
import {ContentBox, ContentTitle, ContentBody} from '../components/ContentBox';

const HomePage = ({data}) => {
  const wpPage = data.allWpPage.edges[0].node.content
  let wpContent = wpPage.split(",");

  return (
    <div css={"width:100%;"}>
      <PageHeader />
      <main>
        <Row margin="20px 20px" padding="20px" display="flex" minHeight="80vh" alignItems="center" background={wpContent[3]}>
          <ContentBox>
            <ContentTitle>{wpContent[0]}</ContentTitle>
            <ContentBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, voluptatum quidem necessitatibus repudiandae unde consequuntur, nemo voluptate blanditiis est totam doloremque facilis? Voluptate, dignissimos dolores!
            </ContentBody>
          </ContentBox>
          <ContentBox>
            <ContentTitle>{wpContent[1]}</ContentTitle>
            <ContentBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, voluptatum quidem necessitatibus repudiandae unde consequuntur, nemo voluptate blanditiis est totam doloremque facilis? Voluptate, dignissimos dolores!
            </ContentBody>
          </ContentBox>
          <ContentBox>
            <ContentTitle>{wpContent[2]}</ContentTitle>
            <ContentBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, voluptatum quidem necessitatibus repudiandae unde consequuntur, nemo voluptate blanditiis est totam doloremque facilis? Voluptate, dignissimos dolores!
            </ContentBody>
          </ContentBox>
        </Row>
      </main>
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