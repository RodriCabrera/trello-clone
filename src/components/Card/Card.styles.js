import styled from "@emotion/styled";

export const Container = styled.div`
	background-color: white;
	padding: ${({ theme }) => theme.padding.card.body};
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	color: ${({ theme }) => theme.color.text.main};
	word-wrap: break-word;
	box-shadow: 0 1px 0 #091e4240;
	cursor: pointer;
`;
export const Title = styled.span`
	margin-bottom: 4px;
`;
