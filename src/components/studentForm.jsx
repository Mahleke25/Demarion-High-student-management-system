
function StudentForm(props) {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const studentID = formData.get("studentID");
        const name = formData.get("name");
        const age = Number(formData.get("age"));
        const email = formData.get("email");
        const course = formData.get("course");
        const status = formData.get("status");

        // Validate the Student ID
        if (studentID === "") {
            alert("Please enter the student's ID.");
            return;
        }

        // Validate the student's name
        if (name === "") {
            alert("Please enter the student's full name.");
            return;
        }

        // Validate the student's age
        if (
            formData.get("age") === "" ||
            !Number.isFinite(age) ||
            age < 1 ||
            age > 120
        ) {
            alert("Please enter a valid age between 1 and 120.");
            return;
        }

        // Validate the student's email
        if (email === "") {
            alert("Please enter the student's email address.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate the student's course
        if (course === "") {
            alert("Please enter the student's course of study.");
            return;
        }

        // Validate the enrollment status
        if (status !== "Active" && status !== "Pending") {
            alert("Please select a valid enrollment status.");
            return;
        }

        // Create the student object
        const student = {};

        if (props.selectedStudent) {
            student.id = props.selectedStudent.id;
        } else {
            student.id = Date.now();
        }

        student.studentID = studentID;
        student.name = name;
        student.age = age;
        student.email = email;
        student.course = course;
        student.status = status;

        // Send the student information to the parent component
        props.onSave(student);
    }

    // Set the default form heading and button text
    let heading = "Add New Student";
    let buttonText = "Save Student";

    // Change the heading and button text when editing
    if (props.selectedStudent) {
        heading = "Edit Student";
        buttonText = "Update Student";
    }

    // Set the default form values
    var studentID = "";
    var name = "";
    var age = "";
    var email = "";
    var course = "";
    var status = "Active";

    // Load the existing student's information when editing
    if (props.selectedStudent) {
        studentID = props.selectedStudent.studentID;
        name = props.selectedStudent.name;
        age = props.selectedStudent.age;
        email = props.selectedStudent.email;
        course = props.selectedStudent.course;
        status = props.selectedStudent.status;
    }

    return (
        <div className="modal-overlay">
            <div className="student-form">

                <h2>{heading}</h2>

                <button
                    type="button"
                    onClick={props.onClose}
                >
                    Close
                </button>

                <form onSubmit={handleSubmit}>

                    <label>Student ID</label>
                    <input
                        type="text"
                        name="studentID"
                        defaultValue={studentID}
                        required
                    />

                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        required
                    />

                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        min="1"
                        max="120"
                        step="1"
                        defaultValue={age}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={email}
                        required
                    />

                    <label>Course of Study</label>
                    <input
                        type="text"
                        name="course"
                        defaultValue={course}
                        required
                    />

                    <label>Enrollment Status</label>
                    <select
                        name="status"
                        defaultValue={status}
                        required
                    >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                    </select>

                    <button type="submit">
                        {buttonText}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default StudentForm;