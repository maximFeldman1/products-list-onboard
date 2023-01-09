import styled from "styled-components";

interface WrapperBtnProps {
  visible?: boolean;
}

export const WrapperBtn = styled.div<WrapperBtnProps>`
  position: ${({ visible }) => (!visible ? "fixed" : "none")};
  bottom: ${({ visible }) => (!visible ? "30px" : "0")};
  right: ${({ visible }) => (!visible ? "50px" : "0")};
`;
