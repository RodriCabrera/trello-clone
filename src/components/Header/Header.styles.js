import styled from "@emotion/styled";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	height: ${({ theme }) => theme.height.header};
	width: 100%;
	color: white;
	background: #00000045;
	backdrop-filter: blur(4px);
`;

export const Logo = styled.h1``;
