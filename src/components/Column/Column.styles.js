import styled from "@emotion/styled";

export const Content = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	background-color: ${({ theme }) => theme.color.gray};
	min-width: ${({ theme }) => theme.width.column};
	/* margin: 0.25rem;
	padding: 0.5rem; */
	height: fit-content;
`;
export const Wrapper = styled.div`
	width: ${({ theme }) => theme.width.column};
	margin: 0 4px;
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
`;
export const ColumnTitle = styled.h4`
	color: ${({ theme }) => theme.color.text.main};
	padding: ${({ theme }) => theme.padding.column.title};
	font-weight: 600;
`;
export const CardList = styled.div`
	padding: 0 4px;
	margin: 0 4px;
`;
export const Footer = styled.div`
	padding: 4px 8px;
`;
