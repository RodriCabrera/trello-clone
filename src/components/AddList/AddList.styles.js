import styled from "@emotion/styled";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.color.transparentMid};
	backdrop-filter: blur(4px);
`;
