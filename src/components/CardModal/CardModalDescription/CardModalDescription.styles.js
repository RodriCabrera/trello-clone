import styled from "@emotion/styled/macro";
import { BsXLg } from "react-icons/bs";

export const Body = styled.div`
	padding: 2px;
	margin-top: 8px;
	width: 100%;
`;
export const Subtitle = styled.h4`
	font-size: 16px;
	line-height: 20px;
	font-weight: 600;
`;
export const ButtonGroup = styled.div`
	display: none;
	align-items: center;
`;
export const Description = styled.textarea`
	margin-top: 1rem;
	width: 90%;
	outline: none;
	border: none;
	background: #091e420a;
	resize: none;
	&:focus {
		/* height: 6rem; */
		background: white;
		border: 2px solid ${({ theme }) => theme.color.blue};
	}
`;
export const Form = styled.form`
	&:focus-within ${ButtonGroup} {
		display: flex;
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
	cursor: pointer;
`;
