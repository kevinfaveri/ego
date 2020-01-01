import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LazyImage from '../LazyImage';
import { getSingleImageFixed } from '../../utils/graphql-utils';
import { useInterval } from '../../hooks/useInterval';

const rootQuery = graphql`
  query {
    allImageSharp(
      filter: {
        fluid: {
          originalName: { regex: "/(terminal.png|terminal-blinking.png)/" }
        }
      }
    ) {
      edges {
        node {
          id
          fixed(width: 250, height: 250, quality: 100, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export default function Logo() {
  const data = useStaticQuery(rootQuery);
  const [terminalState, setTerminalState] = useState();

  useInterval(() => setTerminalState(terminalState === 1 ? 0 : 1), 700);

  return (
    <a href="#home">
      <LazyImage
        imageFixed={data.allImageSharp.edges[terminalState].node.fixed}
        style={{
          margin: '20px',
        }}
      />
    </a>
  );
}
