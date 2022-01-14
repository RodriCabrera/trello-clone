import React, { useState, useEffect } from "react";
import {
  SearchInput,
  SearchIcon,
  Container,
  IconWrapper,
} from "./Search.styles";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {}, [searchValue]);

  return (
    <Container>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
      />
    </Container>
  );
};

export default Search;
