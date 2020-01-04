import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { StyledBurger, StyledMenu } from './styles';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(markdown-onepage)/" }
        frontmatter: { id: { eq: "menu-items" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            sections
            sectionIds
          }
          excerpt
        }
      }
    }
  }
`;

export const Menu = ({ open, setOpen }) => {
  const data = useStaticQuery(rootQuery);
  const {
    frontmatter: { sections, sectionIds },
  } = data.allMarkdownRemark.edges[0].node;

  const goToElement = useCallback(id => {
    const el = document.getElementById(id);
    window.scrollTo(0, el.offsetTop - 80);
    if (window.screen.width <= 576)
      document.documentElement.style.overflow = 'auto';
    setOpen(false);
  }, []);

  return (
    <StyledMenu open={open}>
      {sections.map((el, index) => (
        <button
          type="button"
          key={index}
          onClick={() => goToElement(sectionIds[index])}
        >
          {el}
        </button>
      ))}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export const Burger = ({ open, setOpen }) => {
  const openBurger = useCallback(value => {
    if (window.screen.width <= 576) {
      if (value) document.documentElement.style.overflow = 'hidden';
      else document.documentElement.style.overflow = 'auto';
    }

    setOpen(value);
  }, []);
  return (
    <StyledBurger open={open} onClick={() => openBurger(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => {
    if (window.screen.width <= 576) {
      document.documentElement.style.overflow = 'auto';
    }
    setOpen(false);
  });
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

export default BurgerMenu;
