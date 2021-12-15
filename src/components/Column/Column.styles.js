import styled from "@emotion/styled";

export const Wrapper = styled.div`
	margin: 12px 4px 12px 4px;
`;
export const Content = styled.div`
	width: ${({ theme }) => theme.width.column};
	display: flex;
	flex-direction: column;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	background-color: ${({ theme }) => theme.color.gray};
	box-sizing: content-box;
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 8px;
	height: 40px;
`;

export const CardList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 2px 4px;
	margin: 0 4px;
	overflow-y: auto;
`;
export const Footer = styled.div`
	padding: 4px 8px;
	padding-top: 0;
`;
export const ListItem = styled.li`
	padding: 6px 12px;
	cursor: pointer;
	&:hover {
		background: #091e420a;
	}
`;
export const CardPlaceholder = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 35px;
	background-color: ${({ theme }) => theme.color.transparentMid};
	padding: ${({ theme }) => theme.padding.card.body};
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	word-wrap: break-word;
	cursor: pointer;
`;
