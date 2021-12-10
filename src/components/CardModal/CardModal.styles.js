import styled from "@emotion/styled/macro";
import { BsXLg } from "react-icons/bs";

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000000a3;
	z-index: 1;
`;
export const Container = styled.div`
	background-color: ${({ theme }) => theme.color.gray};
	width: 768px;
	height: 80%;
	z-index: 2;
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
`;
export const Wrapper = styled.div`
	padding: 16px;
	height: 100%;
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;
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
export const Body = styled.div`
	padding: 2px;
	margin-top: 8px;
`;
export const Subtitle = styled.h4`
	font-size: 16px;
	line-height: 20px;
	font-weight: 600;
`;
export const CloseButton = styled(BsXLg)`
	position: relative;
	top: -10px;
	right: -10px;
	color: ${({ theme }) => theme.color.silver};
	border: none;
	cursor: pointer;
	border-radius: 100%;
	padding: 10px;
	&:hover {
		background: #091e4214;
	}
`;
