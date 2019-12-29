import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../../Hero';
import { StyledHeader, StyledWorkPeriod, StyledContent } from './styles';
import { getSingleImageFixed } from '../../../utils/graphql-utils';
import { StyledColumn, StyledRow } from '../../Layout/global-styles';
import LazyImage from '../../LazyImage';

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(markdown-onepage)/" }
        frontmatter: { type: { eq: "work" } }
      }
      sort: { order: DESC, fields: [frontmatter___id] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            id
            type
            date
            enterpriseName
            enterpriseLogo {
              childImageSharp {
                fixed(width: 150, quality: 100, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            enterpriseUrl
            workPeriod
          }
          html
        }
      }
    }
  }
`;

function WorkSection() {
  const data = useStaticQuery(rootQuery);

  return (
    <Hero bgColor="secondary" id="work">
      <StyledRow>
        <StyledHeader>Work</StyledHeader>
      </StyledRow>

      {data.allMarkdownRemark.edges.map(el => {
        const { frontmatter, html } = el.node;
        const { enterpriseLogo, enterpriseUrl, workPeriod } = frontmatter;
        return (
          <StyledRow style={{ margin: '30px 0' }}>
            <StyledColumn>
              <a
                href={enterpriseUrl}
                title={enterpriseUrl}
                className="hover-img-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyImage
                  imageFixed={getSingleImageFixed(enterpriseLogo)}
                  style={{ borderRadius: '15px', margin: 'auto' }}
                />
              </a>
            </StyledColumn>
            <StyledColumn>
              <StyledWorkPeriod>{workPeriod}</StyledWorkPeriod>
            </StyledColumn>
            <StyledColumn>
              <StyledContent
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </StyledColumn>
          </StyledRow>
        );
      })}
    </Hero>
  );
}

export default memo(WorkSection);
