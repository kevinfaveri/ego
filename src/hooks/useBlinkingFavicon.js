import { useState, useEffect, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImageByOriginalFileName } from '../utils/graphql-utils';

const faviconsQuery = graphql`
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
`;

export function useBlinkingFavicon() {
  const faviconsData = useStaticQuery(faviconsQuery);
  const favicon = getImageByOriginalFileName(faviconsData, 'terminal.png');
  const blinkingFavicon = getImageByOriginalFileName(
    faviconsData,
    'terminal-blinking.png'
  );

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
