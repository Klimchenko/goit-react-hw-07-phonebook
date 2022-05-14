import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 40px;
  font-weight: 700;
  font-size: 30px;
  color: #264d5f;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #fff;
  }
  &.active {
    color: #fff;
    text-shadow: 0 2px 1px #264d5f, 0 5px 4px #264d5f, 0 11px 8px #264d5f;
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  border-bottom: 0.5px solid #fff;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: auto;
  margin-bottom: 10px;
  background-color: #011b27;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const ChangeColor = styled.span`
  color: #fff;
  transition: color 400ms cubic-bezier(0.4, 0, 0.3, 1);
  &:hover {
    color: #264d5f;
  }
`;
