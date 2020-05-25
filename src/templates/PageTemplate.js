import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
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
  query PageTemplateQuery($sections: [String]!) {
    allMarkdownRemark(filter: { frontmatter: { id: { in: $sections } } }) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            date
            componentName
          }
          html
        }
      }
    }
  }
`;

const PageTemplate = ({ data, pageContext }) => {
  const customPageData = useCustomPage({ data, pageContext });
  const CustomPageProvider = customPageData.CustomComponentProvider;

  return (
    <CustomPageProvider data={data} pageContext={pageContext}>
      <Layout>
        <SEO title={pageContext.name} />
        {pageContext.sections.map(
          section => customPageData.customComponents[section]
        )}
      </Layout>
    </CustomPageProvider>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape(() => ({
    name: PropTypes.string.isRequired,
    routePath: PropTypes.string.isRequired,
    sections: PropTypes.array,
  })),
};

export default PageTemplate;
