import * as React from "react";
import Layout from "../Layout/Layout";
import './pageStyles/ResumePage.scss';
import AlternateBanner from "../components/AlternateBanner/AlternateBanner";
import Resume from "../components/Resume/Resume";
import { graphql } from "gatsby";

const ResumePage = ({data}) => {
  let sections = data.contentfulResumePageTemplate.contentModules;
  return(
    <Layout pageName="ResumePage">
      {
        sections.map((section) => {
          let component = '';
          switch(section.__typename){
            case 'ContentfulAlternateBannerLayout':
              component = <AlternateBanner key={section.contentful_id} fields={section}/>;
              break;
            case 'ContentfulResume':
                component = <Resume key={section.contentful_id} fields={section}/>;
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


export default ResumePage;

export const query = graphql`{
  contentfulResumePageTemplate(title: {eq: "Resume Page"}){

    contentModules{
			...on ContentfulAlternateBannerLayout{
        __typename
        contentful_id
				heading
        copy
        downloadableFileText
        downloadableFile{
					title
          file{
						url
          }
        }
      }
      ...on ContentfulResume{
        __typename
        contentful_id
					resumeSections{
						heading
            __typename
            contentful_id
            resumeItems{
							__typename
              ...on ContentfulResumeItem{
                contentful_id
								title
                subTitle
                date 
                description
              }
              ...on ContentfulSimpleResumeItem{
                contentful_id
								title
                tags{
                  id
									title
                }
                
              }
            }
          }
      }
    }
	}
}
`
