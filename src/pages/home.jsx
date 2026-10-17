
function Dashboard(props) {
    var students = props.students || [];

    var totalStudents = students.length;

// functions that checks for student status    
function isActive(student) {
    return student.status == "Active";
}

function isPending(student) {
    return student.status == "Pending";

}

var activeStudents = students.filter(isActive).length;
var pendingStudents = students.filter(isPending).length;


    return (
        <div className="dashboard">

            {/* Dashboard Heading */}
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Welcome to <span><b>DEMARION</b></span> College of Tech. <br />Student Management System.</p>
            </div>

            {/* Overview Cards */}
            <div className="dashboard-cards">

                <div className="card1">
                    <h3>Total Students</h3>
                    <p className="dashboard-number">{totalStudents}</p>
                    <p>All registered students</p>
                </div>

                <div className="card2">
                    <h3>Active Students</h3>
                    <p className="dashboard-number">{activeStudents}</p>
                    <p>Students currently active</p>
                </div>

                <div className="card3">
                    <h3>Pending Enrolment</h3>
                    <p className="dashboard-number">{pendingStudents}</p>
                    <p>Students awaiting enrolment</p>
                </div>

            </div>

            {/* Dashboard Information */}
            <div className="dashboard-information">
                <h2>System Overview</h2>

                <p>
                    Use the navigation menu to manage student records
                    or view reports.
                </p>

                <p>
                    Student information displayed in this dashboard
                    is based on the records stored in the application.
                </p>
            </div>

        </div>
    );
}

export default Dashboard;