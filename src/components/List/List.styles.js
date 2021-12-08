import styled from "@emotion/styled";

export const Container = styled.div`
	border-radius: 3px;
	background-color: #ebecf0;
	width: 272px;
	margin: 0.25rem;
	padding: 0.5rem;
`;

export const ListTitle = styled.h4`
	color: ${({ theme }) => theme.color.text.main};
`;
