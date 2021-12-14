import styled from "@emotion/styled/macro";
import { BsXLg } from "react-icons/bs";

export const ButtonGroup = styled.div`
	margin-top: 0.25rem;
	display: none;
	gap: 0.5rem;
`;
export const Container = styled.div`
	background-color: ${({ theme }) => theme.color.transparentMid};
	backdrop-filter: ${({ theme }) => theme.blur.mid};
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	/* min-width: ${({ theme }) => theme.width.column}; */
	/* width: 100%; */
	margin: 12px 4px 12px 4px;
	height: fit-content;
	transition: ${({ theme }) => theme.transition.fast};

	&:hover {
		background-color: #ffffff4d;
	}
	&:focus-within ${ButtonGroup} {
		display: flex;
		align-items: center;
	}
	&:focus-within {
		background-color: ${({ theme }) => theme.color.gray};
	}
`;
export const Wrapper = styled.div`
	/* width: 100%; */
	padding: 4px;
	width: ${({ theme }) => theme.width.column};
`;
export const Form = styled.form`
	width: 100%;
`;

export const Button = styled.button`
	padding: 0.5rem;
	border: none;
	background-color: ${({ theme }) => theme.color.blue};
	color: white;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	cursor: pointer;
`;
export const Input = styled.input`
	background-color: ${({ theme }) => theme.color.transparent};
	border: 0;
	width: 90%;
	padding: 8px 12px;
	outline: none;
	cursor: pointer;
	/* overflow: hidden; */
	&:focus {
		outline: none;
		border-radius: ${({ theme }) => theme.borderRadius.rounded};
		border: 2px solid ${({ theme }) => theme.color.blue};
		color: ${({ theme }) => theme.color.text.main};
	}
	&::placeholder {
		color: white;
	}
	&:focus::placeholder {
		color: ${({ theme }) => theme.color.text.main};
	}
`;
export const Close = styled(BsXLg)`
	color: ${({ theme }) => theme.color.silver};
	cursor: pointer;
`;
