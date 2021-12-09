import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	overflow: auto;
	overflow-y: hidden;
	height: calc(100% - ${({ theme }) => theme.height.header} - 1rem);
	flex-wrap: nowrap;
	margin-left: 4px;
`;
