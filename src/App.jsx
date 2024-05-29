import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    width: 18.75rem;
    border: 2px solid black;
`;
function App() {
    return (
        <Container>
            <Homepage />
        </Container>
    );
}

export default App;
