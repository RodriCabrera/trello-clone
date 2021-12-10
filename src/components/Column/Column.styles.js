import styled from "@emotion/styled";
import { BsThreeDots } from "react-icons/bs";

export const Wrapper = styled.div`
	margin: 12px 4px 12px 4px;
	/* box-sizing: border-box; */
	/* display: inline-block; */
	/* white-space: nowrap; */
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
export const ColumnTitle = styled.h4`
	color: ${({ theme }) => theme.color.text.main};
	padding: 0px 4px;
	font-weight: 600;
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
`;
export const Puntos = styled(BsThreeDots)`
	padding: 6px;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	color: ${({ theme }) => theme.color.silver};
	&:hover {
		background-color: ${({ theme }) => theme.color.transparentHigh};
	}
`;
