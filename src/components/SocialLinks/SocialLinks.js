import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import StyledContainer from './styles';

export default function SocialLinks() {
  return (
    <StyledContainer>
      <a
        href="https://github.com/kevinfaguiar"
        title="https://github.com/kevinfaguiar"
        className="hover-img-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:kevinfaveridev@gmail.com"
        title="kevinfaveridev@gmail.com"
        className="hover-img-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://www.linkedin.com/in/kevin-de-faveri-aguiar-786972142"
        title="https://www.linkedin.com/in/kevin-de-faveri-aguiar-786972142"
        className="hover-img-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/kevinfaguiar"
        title="https://twitter.com/kevinfaguiar"
        className="hover-img-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </StyledContainer>
  );
}
