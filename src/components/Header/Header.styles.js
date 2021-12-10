import styled from "@emotion/styled";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	height: ${({ theme }) => theme.height.header};
	width: 100%;
	color: white;
	background: #00000045;
	backdrop-filter: blur(4px);
	/* padding-left: 0.5rem; */
`;
<<<<<<< HEAD
export const LogoContainer = styled.div`
=======
export const LogoContainer = styled.nav`
>>>>>>> 852c1a3d235e757dc32b1aaa00c2311112e2b2d1
	display: flex;
	align-items: center;
`;

export const LogoText = styled.h1`
	margin-left: 8px;
<<<<<<< HEAD
	letter-spacing: 1px;
=======
>>>>>>> 852c1a3d235e757dc32b1aaa00c2311112e2b2d1
`;
