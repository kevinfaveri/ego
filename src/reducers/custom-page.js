import { createContext } from 'react';

export const initialCustomPageState = { pageContext: null, data: null };

export const customPageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE_CONTEXT':
      return { ...state, pageContext: { ...action.pageContext } };
    default:
      return state;
  }
};

export const CustomPageContext = createContext(initialCustomPageState);
