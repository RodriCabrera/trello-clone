import styled from "@emotion/styled/macro";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding-right: 8px;
  padding-left: 30px;
  margin-left: 4px;
  margin-right: 24px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  box-shadow: none;
  box-sizing: border-box;
  color: white;
  float: left;
  height: 32px;
  outline: none;
  transition: width 150ms;
  ::placeholder {
    color: white;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 32px;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 1.7rem;
`;
