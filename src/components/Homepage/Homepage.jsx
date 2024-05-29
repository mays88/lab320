import EmployeeLIst from "../EmployeeList/EmployeeLIst";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";

const Home = styled.div`
    width: 100%;
`;

function Homepage() {
    return (
        <Home>
            <Header />
            <SearchBar />
            <EmployeeLIst />
        </Home>
    );
}
export default Homepage;
