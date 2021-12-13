import styled from "@emotion/styled/macro";
import { BsXLg } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

export const Container = styled.div``;

export const MoreIcon = styled(FiMoreHorizontal)`
	padding: 6px;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	color: ${({ theme }) => theme.color.silver};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.color.transparentHigh};
	}
`;
export const DropContainer = styled.div`
	display: ${(props) => (props.show ? "block" : "none")};
	position: absolute;
	width: 280px;
	z-index: 1;
	background: white;
	border-radius: 3px;
	box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
`;
export const Header = styled.div`
	margin-bottom: 8px;
	color: ${({ theme }) => theme.color.darkGray};
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid lightgray;
	margin: 0 12px;
`;
export const Close = styled(BsXLg)`
	color: ${({ theme }) => theme.color.silver};
	font-size: 0.8rem;
	cursor: pointer;
	position: absolute;
	right: 18px;
	&:hover {
		color: #172b4d;
	}
`;
export const List = styled.ul`
  list-style-type: none;
  margin: 6px 0;
  padding: 0 0;
}
`;
export const ListItem = styled.li`
	padding: 6px 12px;
	cursor: pointer;
	&:hover {
		background: #091e420a;
	}
`;
export const Background = styled.div`
	display: ${(props) => (props.show ? "block" : "none")};
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 1;
	background: ${({ theme }) => theme.color.transparent};
	border-radius: 3px;
	box-shadow: 0 8px 16px -4px #091e4240, 0 0 0 1px #091e4214;
`;
