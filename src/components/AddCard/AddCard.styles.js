import styled from "@emotion/styled";

export const Container = styled.div``;
export const TextArea = styled.textarea``;
export const Button = styled.button`
	background-color: ${({ theme }) => theme.color.transparent};
	border: 0;
	color: ${({ theme }) => theme.color.darkGray};
	padding: 4px 8px;
	width: 100%;
	text-align: start;
	cursor: pointer;
	&:hover {
		filter: brightness(80%);
	}
`;
