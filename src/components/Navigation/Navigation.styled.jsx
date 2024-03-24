import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-right: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &:active {
    color: #f4df7f;
  }
  &:hover {
    color: #f4df7f;
  }
`;
