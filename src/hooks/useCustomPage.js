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

// TODO: Block names mostrando o título algo assim... talvez um custom componente modificado,
// algo para identificar de fato a posição na tela
// TODO: Custom Components que faltam
// TODO: Footer como editable component a ser adicionado também
// TODO: Menu editável
// TODO: Create pages on demand
// TODO: Blog post editor
// TODO: Create blog pages on demand too
// TODO: Put emoji parser in every text present
// TODO: New List component with different placeholder
// TODO: New image custom component TinaCMS (Check if new release fixes)
// TODO: TinaCMS dark theme accordingly page theme
// TODO: Curriculum Vitae Page Component
// TODO: FIX Hidden menu button
const CustomComponentProvider = ({ children, pageContext, formObj }) => {
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

  useEffect(() => {
    dispatch({
      type: 'SET_FORM_OBJ',
      formObj,
    });
  }, [formObj]);

  return (
    <CustomPageContext.Provider value={[state, dispatch]}>
      {children}
    </CustomPageContext.Provider>
  );
};

CustomComponentProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
  formObj: PropTypes.object.isRequired,
};

const useCustomPage = (data, formObj) => {
  const customComponents = useMemo(
    () =>
      (data.sections ?? []).map(sectionData => {
        const CustomComponent = CustomComponents[sectionData._template];
        // eslint-disable-next-line
        return CustomComponent ? <CustomComponent {...sectionData} formObj={formObj} key={shortid.generate()} id={`custom-component-${shortid.generate()}`} /> : (<HeadingSection height="auto" text={`An error has ocurred! Could not load Custom Component: ${sectionData._template}`}/>
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
