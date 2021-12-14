import styled from "@emotion/styled/macro";

export const ListItem = styled.li`
	padding: 6px 12px;
	cursor: pointer;
	&:hover {
		background: #091e420a;
	}
`;
export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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

	&:hover${ListItem} {
		display: block;
	}
`;
export const Title = styled.span`
	/* margin-bottom: 4px; */
`;
