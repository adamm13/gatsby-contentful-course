import React from 'react'
import {Layout, RichText} from 'components'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function ContentfulPage(props) {
    console.log(props)
    return ( 
        <Layout>
            {!!props.data.contentfulPage.pageContent}
            <RichText 
            references ={props.data.contentfulPage.pageContent.references}
            raw={props.data.contentfulPage.pageContent.raw} 
            />
        </Layout>
    )
}

export const query = graphql`
    query pageQuery($id: String) {
        contentfulPage(id: {eq: $id}) {
        id
        title
        pageContent{
            raw
            references{
                ... on ContentfulHero {
                  __typename
                  heading
                  subHeading
                  backgroundImage {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                  }
                }
              }
        }
        }
    }
`