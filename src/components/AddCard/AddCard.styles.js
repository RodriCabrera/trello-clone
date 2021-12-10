import styled from "@emotion/styled/macro";
import { BsXLg } from "react-icons/bs";

export const Container = styled.div`
	margin-top: 4px;
`;
export const ButtonGroup = styled.div`
	display: none;
	align-items: center;
`;
export const Form = styled.form`
	&:focus-within ${ButtonGroup} {
		display: flex;
		align-items: center;
	}
`;
export const TextArea = styled.textarea`
	background-color: ${({ theme }) => theme.color.transparent};
	border: 0;
	color: ${({ theme }) => theme.color.darkGray};
	padding: 4px 8px;
	width: 100%;
	box-sizing: border-box;
	text-align: start;
	cursor: pointer;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	resize: none;
	&:placeholder-shown {
		height: 2em;
	}
	&:hover {
		background-color: ${({ theme }) => theme.color.transparentHigh};
		color: black;
	}
	&:focus {
		background-color: white;
		outline: none;
		height: 4em;
		cursor: text;
	}
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.color.blue};
	border: 0;
	color: white;
	padding: 6px 12px;
	margin-right: 8px;
	text-align: start;
	cursor: pointer;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	&:hover {
		background-color: ${({ theme }) => theme.color.darkBlue};
	}
`;
export const Close = styled(BsXLg)`
	color: ${({ theme }) => theme.color.silver};
`;
