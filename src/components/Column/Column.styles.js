import styled from "@emotion/styled";

export const Wrapper = styled.div`
	margin: 12px 4px 12px 4px;
	width: ${({ theme }) => theme.width.column};
`;
export const Content = styled.div`
	/* display: flex;
	flex-direction: column; */
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	background-color: ${({ theme }) => theme.color.gray};
	/* margin: 8px; */
	box-sizing: content-box;
	width: 100%;
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
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 0 4px;
	margin: 0 4px;
	overflow-y: scroll;
`;
export const Footer = styled.div`
	padding: 4px 8px;
`;
