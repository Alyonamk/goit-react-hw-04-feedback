import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

`;

export const ButtonItem = styled.li`
:hover:nth-of-type(1) button {
    background-color: green;
    border: 1px solid black;
  }
  :hover:nth-of-type(2) button {
    background-color: orange;
    border: 1px solid black;
  }
  :hover:nth-of-type(3) button {
    background-color: red;
    border: 1px solid black;
  }
`;

export const Button = styled.button`
  padding: 5px 25px;
  font-size: 24px;
  color: black;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    color: white;
    border: 1px solid transparent;
  }
`;