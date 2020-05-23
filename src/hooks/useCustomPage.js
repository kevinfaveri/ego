import React, { useEffect, useState } from 'react';
import Loadable from '@loadable/component';
import { timeout } from 'promise-timeout';
import { graphql } from 'gatsby';
import HeadingSection from '../components/CustomComponents/HeadingSection';

// TODO: Incluir children node a partir de markdown remarker
// TODO: Melhorar repetição de custom query para custom pages
// TODO: Create loading component
// TODO: Remove console.logs browser
// TODO: Treat all errors warnings in console
// TODO: Bug css on refresh
// TODO: Add React hot refresh or reload

export const queryFragmentCustomPage = graphql`
  fragment CustomPageData on CustomPagesJson {
    name
    routePath
    sections {
      contentId
      componentName
    }
  }
`;

const importCustomComponent = componentName =>
  Loadable(
    () =>
      timeout(
        import(
          `../components/CustomComponents/${componentName}`
        ).catch(() => () => (
          <HeadingSection>
            {`An error has ocurred! Could not load Custom Component: ${componentName}`}
          </HeadingSection>
        )),
        2000
      ),
    {
      fallback: <div>Loading oh yeas</div>,
    }
  );

const useCustomPage = ({ customPagesJson: pageData }) => {
  const [customComponents, setCustomComponents] = useState([]);

  useEffect(() => {
    async function loadCustomComponents() {
      const componentPromises = (pageData.sections ?? []).map(async section => {
        const CustomComponent = await importCustomComponent(
          section.componentName
        );
        return <CustomComponent props={{}} key={section.contentId} />;
      });

      Promise.all(componentPromises).then(setCustomComponents);
    }

    loadCustomComponents();
  }, []);

  return customComponents;
};

export default useCustomPage;
