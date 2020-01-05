import React, { useRef, useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Location } from '@reach/router';
import { StyledBurger, StyledMenu } from './styles';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const rootQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(onepage-content)/" }
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

  const goToElement = useCallback((id, { navigate, location }) => {
    const goToFunc = () => {
      let el = document.getElementById(id);
      if (!el) el = window;
      window.scrollTo(0, el.offsetTop - 80);
      if (window.screen.width <= 576)
        document.documentElement.style.overflow = 'auto';
      setOpen(false);
    };

    if (location.pathname !== '/') {
      navigate('/').then(() => {
        setTimeout(() => {
          goToFunc();
        }, 300);
      });
    } else {
      goToFunc();
    }
  }, []);

  return (
    <StyledMenu open={open}>
      <Location>
        {({ navigate, location }) =>
          sections.map((el, index) => (
            <button
              type="button"
              key={index}
              onClick={() =>
                goToElement(sectionIds[index], { navigate, location })
              }
            >
              {el}
            </button>
          ))
        }
      </Location>
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

export default memo(BurgerMenu);
