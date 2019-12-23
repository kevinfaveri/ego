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

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(markdown-onepage)/" }
        frontmatter: { title: { eq: "Presentation" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
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

function PresentationSection() {
  const data = useStaticQuery(rootQuery);
  const presentationData = getSingleMarkdownNode(data);
  const myselfImage = getSingleImageFixed(data);
  const {
    title,
    typingPartOne,
    contentPartOne,
    contentPartTwo,
    contentPartThree,
  } = presentationData;

  const [dividerWidth, setDividerWidth] = useState(0);

  setTimeout(() => {
    setDividerWidth('100%');
  }, 700);

  return (
    <Hero bgColor="primary" id={title.toString().toLowerCase()}>
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

export default PresentationSection;
