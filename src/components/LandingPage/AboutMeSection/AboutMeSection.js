import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../../Hero';
import { StyledHeader, StyledContent } from './styles';
import { getSingleMarkdownNode } from '../../../utils/graphql-utils';
import { StyledColumn, StyledRow } from '../../Layout/global-styles';

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(markdown-onepage)/" }
        frontmatter: { id: { eq: "871d6ed8-7dc0-4ec0-aeed-344eb4a77ab9" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            id
            title
            date
          }
          html
        }
      }
    }
  }
`;

function AboutMeSection() {
  const data = useStaticQuery(rootQuery);
  const { frontmatter, html } = getSingleMarkdownNode(data);
  const { id, title } = frontmatter;

  return (
    <Hero bgColor="secondary" id={id}>
      <StyledRow>
        <StyledColumn>
          <StyledHeader>{title}</StyledHeader>
        </StyledColumn>
        <StyledColumn>
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
        </StyledColumn>
      </StyledRow>
    </Hero>
  );
}

export default AboutMeSection;