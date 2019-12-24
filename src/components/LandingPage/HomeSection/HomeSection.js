import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Twemoji from 'twemoji';
import Hero from '../../Hero';
import AnimatedTyping from '../../AnimatedTyping';
import { StyledMessage, StyledDivider } from './styles';
import {
  getSingleMarkdownNode,
  getSingleImageFixed,
} from '../../../utils/graphql-utils';
import LazyImage from '../../LazyImage';
import { StyledColumn, StyledRow } from '../../Layout/global-styles';
import { useTimeout } from '../../../hooks/useInterval';

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(markdown-onepage)/" }
        frontmatter: { id: { eq: "d2018967-2c23-451f-b803-545e16e60e61" } }
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
            typingPartOne
            contentPartOne
            contentPartTwo
            contentPartThree
          }
          excerpt
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "itsmekevin.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

function HomeSection() {
  const data = useStaticQuery(rootQuery);
  const { frontmatter } = getSingleMarkdownNode(data);
  const myselfImage = getSingleImageFixed(data);
  const {
    id,
    typingPartOne,
    contentPartOne,
    contentPartTwo,
    contentPartThree,
  } = frontmatter;

  const [dividerWidth, setDividerWidth] = useState(0);

  useTimeout(() => setDividerWidth('100%'), 700);

  return (
    <Hero bgColor="primary" id={id}>
      <StyledRow>
        <StyledColumn>
          <AnimatedTyping steps={[500, typingPartOne]} />
          <StyledDivider dividerWidth={dividerWidth} />
          <StyledMessage
            dangerouslySetInnerHTML={{
              __html: Twemoji.parse(contentPartOne),
            }}
          />
          <StyledMessage
            dangerouslySetInnerHTML={{
              __html: Twemoji.parse(contentPartTwo),
            }}
          />
          <StyledMessage
            dangerouslySetInnerHTML={{
              __html: Twemoji.parse(contentPartThree),
            }}
          />
        </StyledColumn>
        <StyledColumn>
          <LazyImage
            imageFixed={myselfImage}
            style={{ borderRadius: '150px' }}
          />
        </StyledColumn>
      </StyledRow>
    </Hero>
  );
}

export default HomeSection;
