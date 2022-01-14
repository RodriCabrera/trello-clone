import { useSearchFilter } from "../../hooks/useSearchFilter";
import {
  SearchInput,
  SearchIcon,
  Container,
  IconWrapper,
} from "./Search.styles";

const Search = () => {
  const { searchFilter, setSearchFilter } = useSearchFilter();
  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  };
  console.log(searchFilter);
  return (
    <Container>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchInput
        value={searchFilter}
        onChange={handleChange}
        placeholder="Search"
      />
    </Container>
  );
};

export default Search;
