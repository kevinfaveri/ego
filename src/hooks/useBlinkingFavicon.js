import { useState, useEffect, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export function useBlinkingFavicon() {
  const {
    allImageSharp: { edges: favicons },
  } = useStaticQuery(graphql`
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
            fluid {
              src
              originalName
            }
          }
        }
      }
    }
  `);
  const favicon = favicons.find(
    x => x.node.fluid.originalName === 'terminal.png'
  ).node.fluid.src;
  const blinkingFavicon = favicons.find(
    x => x.node.fluid.originalName === 'terminal-blinking.png'
  ).node.fluid.src;

  const [faviconPath, setFaviconPath] = useState(favicon);
  const faviconInterval = setInterval(
    () => setFaviconPath(faviconPath === favicon ? blinkingFavicon : favicon),
    300
  );
  useEffect(() => {
    document.querySelector('[rel="icon"]').href = faviconPath;
    return () => clearInterval(faviconInterval);
  }, [faviconPath]);
}
