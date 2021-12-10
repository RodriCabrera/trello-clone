import styled from "@emotion/styled/macro";

export const ButtonGroup = styled.div`
	margin-top: 0.25rem;
	display: none;
	gap: 0.5rem;
`;
export const Container = styled.div`
	background-color: ${({ theme }) => theme.color.transparentMid};
	backdrop-filter: ${({ theme }) => theme.blur.mid};
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	min-width: ${({ theme }) => theme.width.column};
	margin: 12px 4px 12px 4px;
	height: fit-content;
	transition: ${({ theme }) => theme.transition.fast};

	&:hover {
		background-color: ${({ theme }) => theme.color.transparentMid};
	}
	&:focus-within {
		background-color: ${({ theme }) => theme.color.gray};
	}
	&:focus-within ${ButtonGroup} {
		display: flex;
		align-items: center;
	}
`;

export const Form = styled.form`
	padding: 4px;
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
	width: 270px;
	padding: 8px 12px;
	outline: none;
	cursor: pointer;
	overflow: hidden;
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
