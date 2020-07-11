import React, { useState, memo } from 'react';
import Twemoji from 'twemoji';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Hero from '../../Hero';
import AnimatedTyping from '../../AnimatedTyping';
import { StyledMessage, StyledUnderline } from './styles';
import LazyImage from '../../LazyImage';
import { StyledFlex, StyledColumn } from '../../Layout/global-styles';
import { useTimeout } from '../../../hooks/useTimeout';
import SocialLinks from '../../SocialLinks';

export const AboutMeSectionBlock = {
  label: 'About Me Section',
  key: shortid.generate(),
  defaultItem: {
    title: 'Title here.',
    bgBrightness: 'Lighten',
    phrases: [],
    avatarPhoto: null,
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
      label: 'Phrases',
      name: 'phrases',
      component: 'blocks',
      templates: {
        PhrasesBlock: {
          label: 'Phrase',
          key: shortid.generate(),
          defaultItem: {
            text: '',
          },
          fields: [{ name: 'text', label: 'Text', component: 'text' }],
        },
      },
    },
    {
      label: 'Social Links',
      name: 'socialLinks',
      component: 'blocks',
      templates: {
        SocialLinksBlock: {
          label: 'Social Link',
          key: shortid.generate(),
          defaultItem: {
            icon: 'FaGithub',
            title: '',
            href: '',
            isDownload: false,
          },
          fields: [
            {
              name: 'icon',
              label: 'Icon',
              component: 'select',
              options: ['FaGithub', 'FaLinkedin', 'FaTwitter', 'FaEnvelope'],
            },
            { name: 'title', label: 'Title', component: 'text' },
            { name: 'href', label: 'Link', component: 'text' },
            { name: 'isDownload', label: 'Is Download?', component: 'toggle' },
          ],
        },
      },
    },
    {
      name: 'avatarPhoto',
      label: 'Photo',
      component: 'image',
      previewSrc: (formValues, { input }) => {
        const path = input.name.replace('rawJson', 'jsonNode');
        const gatsbyImageNode = get(formValues, path);
        if (!gatsbyImageNode?.childImageSharp?.fluid) return '';
        return gatsbyImageNode.childImageSharp.fluid.src;
      },

      uploadDir: () => './src/images/user',

      parse: filename => {
        if (!filename) return null;
        return `../images/user/${filename}`;
      },
    },
  ],
};

function AboutMeSection({
  id,
  title,
  bgBrightness,
  phrases,
  socialLinks,
  avatarPhoto,
}) {
  const [dividerWidth, setDividerWidth] = useState(0);

  useTimeout(() => setDividerWidth('100%'), 700);

  return (
    <Hero bgBrightness={bgBrightness} id={`about-me-section-${id}`} key={id}>
      <StyledFlex>
        <StyledColumn>
          <AnimatedTyping steps={[500, title]} />
          <StyledUnderline dividerWidth={dividerWidth} />
          {phrases &&
            phrases.map(phrase => (
              <StyledMessage
                key={shortid.generate()}
                dangerouslySetInnerHTML={{
                  __html: Twemoji.parse(phrase.text),
                }}
              />
            ))}
        </StyledColumn>
        <StyledColumn>
          <StyledFlex>
            <LazyImage
              imageFixed={avatarPhoto?.childImageSharp?.fixed}
              style={{ borderRadius: '150px', margin: '20px 0' }}
            />
          </StyledFlex>
          <StyledFlex>
            <SocialLinks socialLinks={socialLinks} />
          </StyledFlex>
        </StyledColumn>
      </StyledFlex>
    </Hero>
  );
}

AboutMeSection.defaultProps = {
  id: shortid.generate(),
  phrases: [],
  socialLinks: [],
};

AboutMeSection.propTypes = {
  id: PropTypes.string,
  bgBrightness: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phrases: PropTypes.array,
  socialLinks: PropTypes.array,
  avatarPhoto: PropTypes.object.isRequired,
};

/*
<LazyImage
              imageFixed={getSingleImageFixed(avatarPhoto)}
              style={{ borderRadius: '150px', margin: '20px 0' }}
            />
            */

export default memo(AboutMeSection);
