import styled from "@emotion/styled/macro";
import { BsArchive } from "react-icons/bs";

export const Archivar = styled(BsArchive)`
	display: none;
	position: absolute;
	right: 3px;
	top: 3px;
	border-radius: 3px;
	padding: 6px;
	color: ${({ theme }) => theme.color.silver};
	&:hover {
		background-color: ${({ theme }) => theme.color.lightGray};
	}
`;
export const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	background-color: white;
	padding: ${({ theme }) => theme.padding.card.body};
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	color: ${({ theme }) => theme.color.text.main};
	word-wrap: break-word;
	box-shadow: 0 1px 0 #091e4240;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.color.lightestGray};
	}
	&:hover ${Archivar} {
		display: block;
	}
`;
export const Title = styled.span`
	margin-bottom: 4px;
`;
