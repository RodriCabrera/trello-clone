import styled from "@emotion/styled/macro";

export const ColumnTitle = styled.input`
	color: ${({ theme }) => theme.color.text.main};
	padding: 4px 8px;
	font-weight: 600;
	resize: none;
	border: none;
	background: none;
	width: 100%;
	&:focus {
		outline: none;
		border-radius: ${({ theme }) => theme.borderRadius.rounded};
		border: 2px solid ${({ theme }) => theme.color.blue};
		background: white;
	}
`;
