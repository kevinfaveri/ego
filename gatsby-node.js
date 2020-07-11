const path = require(`path`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type CustomPagesJson implements Node {
      name: String
      routePath: String
      rawJson: String
      fileRelativePath: String
      sections: [Section]
      footerMessage: String
    }
    type Section {
      _template: String
      title: String
      html: String
      bgBrightness: String
      columnOrder: String
      height: String
      text: String
      phrases: [Phrase]
      socialLinks: [SocialLink]
      projects: [Project]
      avatarPhoto: File @fileByRelativePath
      experiences: [Experience]
    }
    type Phrase {
      text: String
    }
    type SocialLink {
      icon: String
      title: String
      href: String
      isDownload: Boolean
    }
    type Experience {
      image: File @fileByRelativePath
      workPeriod: String,
      referenceUrl: String,
      html: String
    }
    type Project {
      image: File @fileByRelativePath
      title: String,
      html: String,
      projectUrl: String,
    }
  `;
  createTypes(typeDefs);
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
};
