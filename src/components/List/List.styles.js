import styled from "@emotion/styled";

export const Container = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	background-color: ${({ theme }) => theme.color.gray};
	min-width: ${({ theme }) => theme.width.list};
	margin: 0.25rem;
	padding: 0.5rem;
	height: fit-content;
`;

export const ListTitle = styled.h4`
	color: ${({ theme }) => theme.color.text.main};
`;
