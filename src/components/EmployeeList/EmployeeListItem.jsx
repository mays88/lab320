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

function EmployeeListItem() {
    const employees = [
        {
            id: 1,
            image: "https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a74f49e4ae12986f0d9e75_Drew%20Cano-p-500.jpg",
            name: "James King",
            role: "President and CEO",
        },
        {
            id: 2,
            image: "https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a75016fa58af5ad40896c6_Eve%20Leroy-p-500.jpg",
            name: "Julie Taylor",
            role: "VP of Marketing",
        },
        {
            id: 3,
            image: "https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a750351ddf78d3cc78e8eb_Frank%20Whitaker-p-500.jpg",
            name: "Eugene Lee",
            role: "CFO",
        },
        {
            id: 4,
            image: "https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a74b9b6a26cde15a2703e3_Ammar%20Foley-p-500.jpg",
            name: "John Williams",
            role: "VP of Engineering",
        },
        {
            id: 5,
            image: "https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a752819720467bc0081df2_Noah%20Pierre-p-500.jpg",
            name: "Ray Moore",
            role: "VP of Sales",
        },
        {
            id: 6,
            image: "https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a74c0afe8e58cc1aca3b0a_Anaiah%20Whitten-p-500.jpg",
            name: "Paula Jones",
            role: "QA Manager",
        },
    ];
    return (
        <>
            {employees.map(function (employee) {
                return (
                    <ELIContainer key={employee.id}>
                        <EmployeeListImage src={employee.image} />
                        <div>
                            <h4>{employee.name}</h4>
                            <p>{employee.role}</p>
                        </div>
                    </ELIContainer>
                );
            })}
        </>
    );
}
export default EmployeeListItem;
