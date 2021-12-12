import styled from "@emotion/styled/macro";

export const Title = styled.textarea`
	width: 100%;
	background-color: ${({ theme }) => theme.color.gray};
	outline: none;
	resize: none;
	border: 0;
	border-radius: ${({ theme }) => theme.color.rounded};
	overflow: hidden;
	overflow-wrap: break-word;
	font-size: 20px;
	font-weight: 600;
	height: 32px;
	line-height: 24px;
	&:focus {
		background-color: white;
		outline: none;
		border-radius: ${({ theme }) => theme.borderRadius.rounded};
		border: 2px solid ${({ theme }) => theme.color.blue};
		color: ${({ theme }) => theme.color.text.main};
	}
`;
