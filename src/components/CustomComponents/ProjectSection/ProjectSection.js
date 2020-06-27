import React, { memo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import get from 'lodash.get';
import Hero from '../../Hero';
import { StyledProjectColumn, StyledProjectTitle } from './styles';
import {
  StyledHeader,
  StyledContent,
  StyledDividerResponsive,
  StyledFlex,
} from '../../Layout/global-styles';
import LazyImage from '../../LazyImage';

export const ProjectSectionBlock = {
  label: 'Project Section',
  key: shortid.generate(),
  defaultItem: {
    title: 'Projects',
    bgBrightness: 'Lighten',
    projects: [],
  },
  fields: [
    { name: 'title', label: 'Title', component: 'text' },
    {
      name: 'bgBrightness',
      label: 'Background Color Brightness',
      component: 'select',
      options: ['Lighten', 'Darken'],
    },
    {
      label: 'Projects',
      name: 'projects',
      component: 'blocks',
      templates: {
        ProjectBlock: {
          label: 'Project',
          key: shortid.generate(),
          defaultItem: {
            title: 'Title',
            image: null,
            projectUrl: 'https://vimeo.com/148751763',
            html: 'Content here.',
          },
          fields: [
            { name: 'title', label: 'Title', component: 'text' },
            {
              name: 'image',
              label: 'Image',
              component: 'image',
              previewSrc: (formValues, { input }) => {
                const path = input.name.replace('rawJson', 'jsonNode');
                const gatsbyImageNode = get(formValues, path);

                if (!gatsbyImageNode?.childImageSharp?.fluid) return '';
                return gatsbyImageNode.childImageSharp.fluid.src;
              },

              uploadDir: () => './src/images/projects',

              parse: filename => {
                if (!filename) return null;
                return `../images/projects/${filename}`;
              },
            },
            { name: 'projectUrl', label: 'Project URL', component: 'text' },
            { name: 'html', label: 'Content', component: 'html' },
          ],
        },
      },
    },
  ],
};

function ProjectSection({ id, title, bgBrightness, projects }) {
  return (
    <Hero bgBrightness={bgBrightness} id={`projects-section-${id}`} key={id}>
      <StyledFlex>
        <StyledHeader>{title}</StyledHeader>
      </StyledFlex>
      <StyledFlex style={{ margin: '30px 0' }}>
        {projects.map(
          ({ title: ProjectTitle, html, image, projectUrl }, index) => (
            <StyledProjectColumn key={index}>
              <StyledFlex>
                <a
                  href={projectUrl}
                  title={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-img-link"
                >
                  <LazyImage
                    imageFixed={image?.childImageSharp?.fixed}
                    style={{
                      borderRadius: '15px',
                      margin: 'auto',
                    }}
                  />
                </a>
              </StyledFlex>
              <StyledFlex style={{ marginTop: '15px' }}>
                <StyledProjectTitle>{ProjectTitle}</StyledProjectTitle>
              </StyledFlex>
              <StyledFlex style={{ padding: 0 }}>
                <StyledContent
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </StyledFlex>
              {index + 1 !== projects.length && <StyledDividerResponsive />}
            </StyledProjectColumn>
          )
        )}
      </StyledFlex>
    </Hero>
  );
}

ProjectSection.defaultProps = {
  id: shortid.generate(),
  projects: [],
};

ProjectSection.propTypes = {
  id: PropTypes.string,
  bgBrightness: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projects: PropTypes.array,
};

export default memo(ProjectSection);
