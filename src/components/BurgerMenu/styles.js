import styled from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { darken } from 'polished';

export const StyledMenu = styled.nav`
  overflow: auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  background-color: ${withProp(
    ['theme.colors.backgroundPrimary'],
    darken(0.12)
  )};
  color: ${theme('colors.primary')};

  @media (max-width: 576px) {
    width: 100%;
  }

  button {
    outline: none;
    cursor: pointer;
    background-color: ${withProp(
      ['theme.colors.backgroundPrimary'],
      darken(0.12)
    )};
    border: none;
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${theme('colors.textPrimary')};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;

    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${theme('colors.primary')};
    }
  }
`;

export const StyledBurger = styled.button`
  z-index: 1;
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 20px 0;

  &:focus {
    outline: none;
  }

  &:hover > div {
    background: ${theme('colors.primary')};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${theme('colors.textPrimary')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
