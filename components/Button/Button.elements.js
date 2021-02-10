import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.primaryDark};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s easy-out;
    background: #fff;
    background: ${({ primary, theme }) =>
      !primary ? theme.colors.primary : theme.colors.primaryDark};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;