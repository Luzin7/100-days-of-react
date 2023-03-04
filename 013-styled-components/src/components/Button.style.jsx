import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgb(26, 26, 26);
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(100, 108, 255);
  }
  &:focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
