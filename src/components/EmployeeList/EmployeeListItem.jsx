function EmployeeListItem() {
    const employees = [
        { id: 1, image: "", name: "James King", role: "President and CEO" },
        { id: 2, image: "", name: "Julie Taylor", role: "VP of Marketing" },
        { id: 3, image: "", name: "Eugene Lee", role: "CFO" },
        { id: 4, image: "", name: "John Williams", role: "VP of Engineering" },
        { id: 5, image: "", name: "Ray Moore", role: "VP of Sales" },
        { id: 6, image: "", name: "Paul Jones", role: "QA Manager" },
    ];
    return (
        <>
            {employees.map(function (employee) {
                return (
                    <div key={employee.id}>
                        <img />
                        <h4>{employee.name}</h4>
                        <p>{employee.role}</p>
                    </div>
                );
            })}
        </>
    );
}
export default EmployeeListItem;
