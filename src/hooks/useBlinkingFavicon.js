import { useState, useEffect, useMemo, useCallback } from 'react';
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

  const setNewTimeout = useCallback(
    () =>
      setTimeout(
        () =>
          setFaviconPath(faviconPath === favicon ? blinkingFavicon : favicon),
        300
      ),
    [faviconPath]
  );

  let faviconTimeout = setNewTimeout();
  useEffect(() => {
    clearTimeout(faviconTimeout);
    faviconTimeout = setNewTimeout();
    document.querySelector('[rel="icon"]').href = faviconPath;
    return () => clearTimeout(faviconTimeout);
  }, [faviconPath]);
}
