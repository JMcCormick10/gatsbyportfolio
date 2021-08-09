import * as React from "react";
import Layout from "../Layout/Layout";
import Banner from '../components/Banner/Banner';
import Projects from '../components/Projects/Projects';
import ImageText from "../components/ImageText/ImageText";
import { graphql } from "gatsby";
import './pageStyles/Home.scss';

const IndexPage = ({data}) => {
  let sections = data.contentfulLayout.contentModules;
  return(
    <Layout pageName="Home">
      {
        sections.map((section) => {
          let component = ''
          switch(section.__typename){
            case 'ContentfulLayoutBanner':
              component = <Banner key={section.contentful_id} fields={section}/>;
              break;
            
            case 'ContentfulLayoutProjects':
              component = <Projects key={section.contentful_id} fields={section}/>
              break;

            case 'ContentfulLayoutImageText':
                component = <ImageText key={section.contentful_id} fields={section}/>
                break;

            default: 
              break;
          }
          return component;
        })
      }
    </Layout>
  )
}


export default IndexPage

export const query = graphql `{
  contentfulLayout(title: {eq: "Home Page"}) {
    contentModules {
      ... on ContentfulLayoutBanner {
        __typename
        contentful_id
        heading
        subHeading
      }
      ... on ContentfulLayoutProjects {
        __typename
        contentful_id
        heading
        copy
        projects {
          title
          contentful_id
          description
          url
          categories{
            title
          }
          mainImage{
            title
						file{
            url
            }
          }
        }
      }
      ... on ContentfulLayoutImageText{
				__typename
        contentful_id
        heading
        imagetextCopy: copy {
          copy
        }
        buttonLink {
          text
          page
        },
        image{
					title
          file{
          url
          }
        }
      }
    }
  }
}`
