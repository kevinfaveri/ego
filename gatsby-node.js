const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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

  const result = await graphql(`
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog${node.fields.slug}`,
      component: path.resolve(`./src/components/BlogPost/BlogPost.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const posts = result.data.allMarkdownRemark.edges;
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  console.log('page.path ->', page.path);
  console.log('page.context ->', page.context);
  createPage({
    ...page,
    context: {
      ...page.context,
      pagePath: page.path,
    },
  });
};
