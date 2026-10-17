
import { useState } from 'react';

import StudentTable from '../components/studentTable';

import StudentForm from '../components/studentForm';

function Students(props) {

    // Receive student records from App.jsx
    var students = props.students;
    var setStudents = props.setStudents;

    // Control whether the student form is visible
    var [showForm, setShowForm] = useState(false);

    // Store the student currently being edited
    var [selectedStudent, setSelectedStudent] = useState(null);

    // Control whether the delete confirmation modal is visible
    var [showDeleteModal, setShowDeleteModal] = useState(false);

    // Store the student awaiting deletion
    var [studentToDelete, setStudentToDelete] = useState(null);


    // Add a new student or update an existing student
    function saveStudent(student) {

        if (selectedStudent === null) {

            // Add a new student
            setStudents(function (currentStudents) {
                return currentStudents.concat(student);
            });

        } else {

            // Update the existing student
            setStudents(function (currentStudents) {
                return currentStudents.map(function (currentStudent) {

                    if (currentStudent.id === selectedStudent.id) {
                        return student;
                    }

                    return currentStudent;
                });
            });

        }

        // Close the form after saving
        setShowForm(false);

        // Clear the selected student
        setSelectedStudent(null);
    }


    // Open the delete confirmation modal
    function deleteStudent(studentID) {

        var foundStudent = null;

        students.forEach(function (student) {

            if (student.id === studentID) {
                foundStudent = student;
            }

        });

        if (foundStudent !== null) {
            setStudentToDelete(foundStudent);
            setShowDeleteModal(true);
        }
    }


    // Delete the selected student after confirmation
    function confirmDelete() {

        if (studentToDelete !== null) {

            setStudents(function (currentStudents) {
                return currentStudents.filter(function (student) {
                    return student.id !== studentToDelete.id;
                });
            });

        }

        // Close the delete modal
        setShowDeleteModal(false);

        // Clear the selected student
        setStudentToDelete(null);
    }


    // Cancel deletion
    function cancelDelete() {
        setShowDeleteModal(false);
        setStudentToDelete(null);
    }


    // Open the form with the selected student's details
    function editStudent(student) {
        setSelectedStudent(student);
        setShowForm(true);
    }


    // Open an empty form for a new student
    function openAddForm() {
        setSelectedStudent(null);
        setShowForm(true);
    }


    // Close the form without saving
    function closeForm() {
        setShowForm(false);
        setSelectedStudent(null);
    }


    return (

        <div className="students-page">

            <h1>Student Management System</h1>

            <p>Manage student records here.</p>


            {/* Button for adding a student */}
            <button
                type="button"
                onClick={openAddForm}
            >
                + Add Student
            </button>


            {/* Add Student or Edit Student modal */}
            {showForm && (

                <StudentForm
                    onSave={saveStudent}
                    selectedStudent={selectedStudent}
                    onClose={closeForm}
                />

            )}


            {/* Display the student table */}
            <StudentTable
                students={students}
                onEdit={editStudent}
                onDelete={deleteStudent}
            />


            {/* Delete Confirmation Modal */}
            {showDeleteModal && (

                <div className="modal-overlay">

                    <div className="delete-modal">

                        <h2>Confirm Deletion</h2>

                        <p>
                            Are you sure you want to delete this student?
                        </p>


                        {/* Display the selected student's name */}
                        {studentToDelete !== null && (

                            <p>
                                Student: {studentToDelete.name}
                            </p>

                        )}


                        {/* Confirm deletion */}
                        <button
                            type="button"
                            onClick={confirmDelete}
                        >
                            Yes, Delete
                        </button>


                        {/* Cancel deletion */}
                        <button
                            type="button"
                            onClick={cancelDelete}
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            )}

        </div>

    );
}

export default Students;
