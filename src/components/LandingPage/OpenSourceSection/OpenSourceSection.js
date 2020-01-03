import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../../Hero';
import { StyledProjectColumn, StyledProjectTitle } from './styles';
import { getSingleImageFixed } from '../../../utils/graphql-utils';
import {
  StyledHeader,
  StyledContent,
  StyledDivider,
  StyledFlex,
} from '../../Layout/global-styles';
import LazyImage from '../../LazyImage';

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(markdown-onepage)/" }
        frontmatter: { type: { eq: "open-source" } }
      }
      sort: { order: ASC, fields: [frontmatter___id] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            id
            type
            date
            projectTitle
            projectPreviewImg {
              childImageSharp {
                fixed(
                  width: 250
                  height: 250
                  quality: 100
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            projectUrl
          }
          html
        }
      }
    }
  }
`;

function OpenSourceSection() {
  const data = useStaticQuery(rootQuery);

  return (
    <Hero bgColor="primary" id="open-source">
      <StyledFlex>
        <StyledHeader>Open Source</StyledHeader>
      </StyledFlex>
      <StyledFlex style={{ margin: '30px 0' }}>
        {data.allMarkdownRemark.edges.map((el, index) => {
          const { frontmatter, html } = el.node;
          const { projectTitle, projectPreviewImg, projectUrl } = frontmatter;
          return (
            <StyledProjectColumn key={index}>
              <StyledFlex>
                <a
                  href={projectUrl}
                  title={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-img-link"
                >
                  <LazyImage
                    imageFixed={getSingleImageFixed(projectPreviewImg)}
                    style={{
                      borderRadius: '15px',
                      margin: 'auto',
                    }}
                  />
                </a>
              </StyledFlex>
              <StyledFlex style={{ marginTop: '15px' }}>
                <StyledProjectTitle>{projectTitle}</StyledProjectTitle>
              </StyledFlex>
              <StyledFlex style={{ padding: 0 }}>
                <StyledContent
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </StyledFlex>
              {index + 1 !== data.allMarkdownRemark.edges.length && (
                <StyledDivider />
              )}
            </StyledProjectColumn>
          );
        })}
      </StyledFlex>
      <StyledFlex style={{ justifyContent: 'center', margin: '10px' }}>
        <StyledProjectTitle>
          Believe in the projects? Support me here:
        </StyledProjectTitle>
      </StyledFlex>
      <StyledFlex style={{ justifyContent: 'center', margin: '10px' }}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<a href='https://ko-fi.com/E1E11BKWW' target='_blank'>
            <img height='50' style='border:0px;height:50px;' 
            src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' />
          </a>`,
          }}
        />
      </StyledFlex>
    </Hero>
  );
}

export default memo(OpenSourceSection);
