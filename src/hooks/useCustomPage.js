import React, { useEffect, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CustomComponents from '../components/CustomComponents';
import HeadingSection from '../components/CustomComponents/HeadingSection';
import {
  customPageReducer,
  initialCustomPageState,
  CustomPageContext,
} from '../reducers/custom-page';

// TODO: Bug css on refresh
// TODO: Add React hot refresh or reload
// TODO: Block names mostrando o título algo assim... talvez um custom componente modificado,
// algo para identificar de fato a posição na tela
// TODO: Custom Components que faltam
// TODO: Footer como editable component a ser adicionado também
// TODO: Menu editável
// TODO: Create pages on demand
// TODO: Blog post editor
// TODO: Create blog pages on demand too
// TODO: Put emoji parser in every text present
// TODO: TinaCMS dark theme accordingly page theme
const CustomComponentProvider = ({ children, pageContext }) => {
  const [state, dispatch] = useReducer(
    customPageReducer,
    initialCustomPageState
  );

  useEffect(() => {
    dispatch({
      type: 'SET_PAGE_CONTEXT',
      pageContext,
    });
  }, [pageContext]);

  return (
    <CustomPageContext.Provider value={[state, dispatch]}>
      {children}
    </CustomPageContext.Provider>
  );
};

CustomComponentProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
};

const useCustomPage = data => {
  const customComponents = useMemo(
    () =>
      (data.sections ?? []).map(sectionData => {
        console.log(sectionData);
        const CustomComponent = CustomComponents[sectionData._template];
        // eslint-disable-next-line
        return CustomComponent ? <CustomComponent {...sectionData} key={shortid.generate()} id={`custom-component-${shortid.generate()}`} /> : (<HeadingSection height="auto" text={`An error has ocurred! Could not load Custom Component: ${sectionData._template}`}/>
        );
      }),
    [data?.sections]
  );

  return {
    customComponents,
    CustomComponentProvider,
  };
};

export default useCustomPage;
