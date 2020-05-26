const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type CustomPagesJson implements Node {
      name: String
      routePath: String
      rawJson: String
      fileRelativePath: String
      sections: [Section]
    }
    type Section {
      _template: String
      title: String
      html: String
      bgBrightness: String
      columnOrder: String
      height: String
      text: String
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === `MarkdownRemark` &&
    node.fileAbsolutePath.includes('blog-pages')
  ) {
    const slug = createFilePath({ node, getNode, basePath: `blog` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const customPagesResult = await graphql(`
    query {
      allCustomPagesJson {
        edges {
          node {
            name
            routePath
          }
        }
      }
    }
  `);

  let customPagesData;
  try {
    customPagesData = customPagesResult.data.allCustomPagesJson.edges.map(
      edgeObj => edgeObj.node
    );
  } catch {
    customPagesData = [];
  }

  customPagesData.forEach(customPage => {
    const pageObj = {
      path: customPage.routePath,
      component: path.resolve(`./src/templates/PageTemplate.js`),
      context: {
        slug: customPage.routePath,
        ...customPage,
      },
    };
    createPage(pageObj);
  });

  // Blog Pages
  const blogPages = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blog-pages)/" } }
        sort: { order: DESC, fields: [frontmatter___id] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  blogPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog${node.fields.slug}`,
      component: path.resolve(`./src/components/BlogPost/BlogPost.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const posts = blogPages.data.allMarkdownRemark.edges;
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/components/BlogPostList/BlogPostList.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
