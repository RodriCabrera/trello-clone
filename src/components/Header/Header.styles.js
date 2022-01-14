import styled from "@emotion/styled";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.height.header};
  width: 100%;
  color: white;
  background: #00000045;
  backdrop-filter: blur(4px);
  /* padding-left: 0.5rem; */
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  margin-left: 8px;
  letter-spacing: 1px;
`;
