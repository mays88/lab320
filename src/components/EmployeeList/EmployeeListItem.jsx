/* eslint-disable react/prop-types */
import styled from "styled-components";

const ELIContainer = styled.div`
    display: flex;
    gap: 0.63em;
    padding: 0.33em;
    border: 1px solid #d4d4d4;
`;

const EmployeeListImage = styled.img`
    width: 50px;
    border-radius: 50%;
`;

function EmployeeListItem({ key, role, name, image }) {
    return (
        <>
            <ELIContainer key={key}>
                <EmployeeListImage src={image} />
                <div>
                    <h4>{name}</h4>
                    <p>{role}</p>
                </div>
            </ELIContainer>
        </>
    );
}
export default EmployeeListItem;
