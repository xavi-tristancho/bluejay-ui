import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../Theme/";

const StyledButton = styled.button`
  ${({ theme, color = "default" }) => `  
  background-color: ${theme.button[color].background};
  color: ${theme.button[color].text};
  `}
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;