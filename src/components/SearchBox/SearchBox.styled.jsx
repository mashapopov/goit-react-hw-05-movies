import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 600px;
  height: 50px;
  position: relative;
  margin-bottom: 16px;
  max-width: 100%;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 60%;
  height: 70%;
  padding: 0 20px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 15px;
  letter-spacing: 2px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 4px;

  justify-content: center;
  border: none;
  text-decoration: none;
  background-color: #ff00ff;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #9f2b68;
    color: white;
  }
`;
