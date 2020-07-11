import { createContext, useContext } from 'react';

export const initialCustomPageState = {
  pageContext: null,
  formObj: null,
  data: null,
};

export const customPageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE_CONTEXT':
      return { ...state, pageContext: { ...action.pageContext } };
    case 'SET_FORM_OBJ':
      return { ...state, formObj: { ...action.formObj } };
    default:
      return state;
  }
};

export const CustomPageContext = createContext(initialCustomPageState);

export const usePageContext = () => useContext(CustomPageContext);
