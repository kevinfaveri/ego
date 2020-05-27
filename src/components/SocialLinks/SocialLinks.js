import React, { memo, useMemo } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import StyledContainer from './styles';

const FaIcons = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
};

function SocialLinks({ socialLinks }) {
  const socialLinksParsed = useMemo(
    () =>
      (socialLinks ?? []).map(socialLink => {
        const FaIcon = FaIcons[socialLink.icon];
        return (
          <a
            key={shortid.generate()}
            href={socialLink.href}
            title={socialLink.title}
            className="hover-img-link"
            target="_blank"
            rel="noopener noreferrer"
            download={socialLink.isDownload}
          >
            {FaIcon ? <FaIcon /> : <FaGithub />}
          </a>
        );
      }),
    [socialLinks]
  );
  return <StyledContainer>{socialLinksParsed}</StyledContainer>;
}

SocialLinks.defaultProps = {
  socialLinks: [],
};

SocialLinks.propTypes = {
  socialLinks: PropTypes.array,
};

export default memo(SocialLinks);
