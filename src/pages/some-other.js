import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import useCustomPage from '../hooks/useCustomPage';

/**
TODO: LINK PARA PATREON E KOFI
TODO: i18n PT/EN OPTION</div>
TODO: SearchBlogPosts comum [DIGITA, PESQUISA POR QUERY NA URL ON CLICK ENTER OU CLICK GLASS MAGNIFIER] OU COM DATASET AI FAZ REALTIME...
TODO: TinaCMS testar
 */

export const query = graphql`
  query($pagePath: String!) {
    customPagesJson(routePath: { eq: $pagePath }) {
      ...CustomPageData
    }
  }
`;

const SomeOtherPage = ({ data }) => {
  const customPageData = useCustomPage(data);

  return (
    <Layout>
      <SEO title="Home" />
      {customPageData}
    </Layout>
  );
};

SomeOtherPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SomeOtherPage;
