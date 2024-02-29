import "bootstrap/dist/css/bootstrap.css";

function StudentInfo() {
    let student = [{name: "John", age: 20}, {name: "David", age: 21}, {name: "Rick", age: 22},]
    return (
        <div>
            <table className="table-striped table ">
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                </tr>
                {student.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default StudentInfo;