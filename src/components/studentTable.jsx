function StudentTable(props) {

    var students = props.students || [];

    // Display a message when there are no students
    if (students.length === 0) {
        return (
            <div className="empty-state">
                <h3>No students currently found</h3>
                <p>Try adding some.</p>
            </div>
        );
    }

    // Display one student in a table row
    function displayStudent(student) {
        return (
            <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.studentID}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.status}</td>

                <td>
                    <button
                        type="button"
                        onClick={function () {
                            props.onEdit(student);
                        }}
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={function () {
                            props.onDelete(student.id);
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }

    // Display the student table
    return (
        <div className="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Course of Study</th>
                        <th>Enrollment Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map(displayStudent)}
                </tbody>
            </table>
        </div>
    );
}

export default StudentTable;