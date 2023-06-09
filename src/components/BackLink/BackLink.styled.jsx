import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #ff00ff;
  color: white;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: #9f2b68;
    color: white;
  }
`;
