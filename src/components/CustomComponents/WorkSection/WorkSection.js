import React, { memo } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { usePlugins } from 'tinacms';
import { HtmlFieldPlugin } from 'react-tinacms-editor';
import Hero from '../../Hero';
import { StyledWorkPeriod } from './styles';
import {
  StyledColumn,
  StyledDividerResponsive,
  StyledHeader,
  StyledContent,
  StyledFlex,
} from '../../Layout/global-styles';
import LazyImage from '../../LazyImage';

export const WorkSectionBlock = {
  label: 'Work Section',
  key: shortid.generate(),
  defaultItem: {
    title: 'Work',
    bgBrightness: 'Lighten',
    experiences: [],
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
      label: 'Work Experiences',
      name: 'experiences',
      component: 'blocks',
      templates: {
        ExperienceBlock: {
          label: 'Experience',
          key: shortid.generate(),
          defaultItem: {
            html: 'Content here.',
            image: null,
            referenceUrl: 'https://vimeo.com/148751763',
            workPeriod: 'Work-Period',
          },
          fields: [
            { name: 'html', label: 'Content', component: 'html' },
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

              uploadDir: () => './src/images/work',

              parse: filename => {
                if (!filename) return null;
                return `../images/work/${filename}`;
              },
            },
            { name: 'referenceUrl', label: 'Reference URL', component: 'text' },
            { name: 'workPeriod', label: 'Work Period', component: 'text' },
          ],
        },
      },
    },
  ],
};

function WorkSection({ id, title, bgBrightness, experiences }) {
  usePlugins([HtmlFieldPlugin]);
  return (
    <Hero bgBrightness={bgBrightness} id={`work-section-${id}`} key={id}>
      <StyledFlex>
        <StyledHeader>{title}</StyledHeader>
      </StyledFlex>

      {experiences.map(({ html, image, referenceUrl, workPeriod }, index) => (
        <StyledFlex style={{ margin: '30px 0' }} key={index}>
          <StyledColumn>
            <a
              href={referenceUrl}
              title={referenceUrl}
              className="hover-img-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyImage
                imageFixed={image?.childImageSharp?.fixed}
                style={{ borderRadius: '15px', margin: 'auto' }}
              />
            </a>
          </StyledColumn>
          <StyledColumn>
            <StyledWorkPeriod>{workPeriod}</StyledWorkPeriod>
          </StyledColumn>
          <StyledColumn>
            <StyledContent
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </StyledColumn>
          {index + 1 !== experiences.length && <StyledDividerResponsive />}
        </StyledFlex>
      ))}
    </Hero>
  );
}

WorkSection.defaultProps = {
  id: shortid.generate(),
  experiences: [],
};

WorkSection.propTypes = {
  id: PropTypes.string,
  bgBrightness: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  experiences: PropTypes.array,
};

export default memo(WorkSection);
