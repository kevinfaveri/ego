import React from 'react';
import SEO from '../components/seo';
import Page404 from '../components/Page404';
import LayoutNoNavigation from '../components/Layout/LayoutNoNavigation';

const NotFoundPage = () => (
  <LayoutNoNavigation>
    <SEO title="404: Not found" />
    <Page404 />
  </LayoutNoNavigation>
);

export default NotFoundPage;
