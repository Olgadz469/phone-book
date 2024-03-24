import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &:active {
    color: #f52c08;
  }
  &:hover {
    color: #f52c08;
  }
`;
