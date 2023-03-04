import styled from "styled-components";
import { theme } from "./../Theme";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  width: "100vw";
  height: "100vh";
  text-align: center;
`;
