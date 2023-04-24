import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    gap: 15px;
  }
`;
export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  background-color: #ff00ff;
  &:hover,
  &:focus {
    background-color: #9f2b68;
  }
`;
