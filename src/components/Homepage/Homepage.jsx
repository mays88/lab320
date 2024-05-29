import EmployeeLIst from "../EmployeeList/EmployeeLIst";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

function Homepage() {
    return (
        <>
            <Header />
            <SearchBar />
            <EmployeeLIst />
        </>
    );
}
export default Homepage;
