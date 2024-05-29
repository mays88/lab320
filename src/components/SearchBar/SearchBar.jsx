import styled from "styled-components";

const Search = styled.input`
    width: 100%;
    height: 30px;
`;

function SearchBar() {
    return (
        <>
            <Search type="search" placeholder="Search" />
        </>
    );
}
export default SearchBar;
