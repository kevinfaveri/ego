import React, { useEffect, useState, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import Loadable from '@loadable/component';
import { timeout } from 'promise-timeout';
import HeadingSection from '../components/CustomComponents/HeadingSection';
import {
  customPageReducer,
  initialCustomPageState,
  CustomPageContext,
} from '../reducers/custom-page';

// TODO: Incluir children node a partir de markdown remarker
// TODO: Melhorar repetição de custom query para custom pages
// TODO: Create loading component
// TODO: Treat all errors warnings in console
// TODO: Bug css on refresh
// TODO: Add React hot refresh or reload
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

const CustomComponentProvider = ({ children, data, pageContext }) => {
  const [state, dispatch] = useReducer(
    customPageReducer,
    initialCustomPageState
  );

  useEffect(() => {
    dispatch({
      type: 'SET_PAGE_DATA',
      data,
    });
    dispatch({
      type: 'SET_PAGE_CONTEXT',
      pageContext,
    });
  }, [data, pageContext]);

  return (
    <CustomPageContext.Provider value={[state, dispatch]}>
      {children}
    </CustomPageContext.Provider>
  );
};

CustomComponentProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

const useCustomPage = ({ data }) => {
  // Get Custom Components
  const edgesArray = data?.allMarkdownRemark?.edges ?? [];
  const sectionDataArray = edgesArray.map(edgeObj => {
    edgeObj.node = {
      ...edgeObj.node,
      ...edgeObj.node.frontmatter,
    };
    delete edgeObj.node.frontmatter;
    return edgeObj.node;
  });
  const [customComponents, setCustomComponents] = useState({});
  const setCustomComponentsObj = useCallback(thePromisedComponents => {
    const customComponentsObj = {};
    thePromisedComponents.forEach(promisedComponent => {
      customComponentsObj[promisedComponent.key] = promisedComponent;
    });
    setCustomComponents(customComponentsObj);
  }, []);

  useEffect(() => {
    async function loadCustomComponents() {
      const componentPromises = (sectionDataArray ?? []).map(
        async sectionData => {
          const CustomComponent = await importCustomComponent(
            sectionData.componentName
          );
          // eslint-disable-next-line
          return <CustomComponent {...sectionData} key={sectionData.id} id={sectionData.id} />;
        }
      );

      Promise.all(componentPromises).then(setCustomComponentsObj);
    }

    loadCustomComponents();
  }, []);

  return {
    customComponents,
    CustomComponentProvider,
  };
};

export default useCustomPage;
