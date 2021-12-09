import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	overflow: scroll;
	overflow-y: hidden;
	height: calc(100% - ${({ theme }) => theme.height.header});
`;
