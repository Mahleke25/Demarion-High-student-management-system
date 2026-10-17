# DEMARION HIGH Student Management System

## 1. Introduction

The DEMARION HIGH Student Management System is a web application I developed using React and JavaScript to make managing student records easier. It allows users to add, view, edit, and delete student records while displaying student statistics on a dashboard.

## 2. Project Objectives

The main objectives are to:

* Develop a functional student management system.
* Demonstrate JavaScript data types, variables, and functions.
* Use React components and state management.
* Implement event handling, forms, and modals.
* Validate student information and display dashboard statistics.

## 3. Main Features

* **Dashboard:** Displays total, active, and pending students, with statistics updating automatically when records change.
* **Student Management:** Allows users to add, view, edit, and delete student records.
* **Form Validation:** Checks required fields, age, email format, and enrolment status.
* **Data Storage:** Uses browser local storage to preserve student records after refreshing the page.

Each record contains the student's ID, full name, age, email, course of study, and enrolment status.

## 4. Technologies Used

* **HTML and CSS:** Structure and style the interface.
* **JavaScript:** Implements the system's functionality.
* **React:** Builds the interface using components and state management.
* **React Router:** Enables navigation between pages.
* **Local Storage:** Saves student records in the browser.

## 5. Project Structure

The main files are:

* `App.jsx` – Manages student records and navigation.
* `home.jsx` – Displays dashboard statistics.
* `students.jsx` – Handles student management.
* `studentTable.jsx` – Displays student records.
* `studentForm.jsx` – Handles adding and editing student information.

## 6. How to Run the Application

Ensure Node.js and npm are installed, then:

1. Open the project folder in Visual Studio Code.
2. Open the terminal and run `npm install`.
3. Start the application using `npm run dev`.
4. Open the local address displayed in the terminal.

## 7. How to Use the System

* **View:** Open the dashboard or Students page.
* **Add:** Enter student information and submit the form.
* **Edit:** Select a student, modify their information, and save.
* **Delete:** Select Delete and confirm or cancel the action.

The dashboard updates automatically when student records change.

## 8. Limitations

The system uses browser local storage instead of a central database. Therefore, records are not automatically shared between computers or browsers and may be lost if the browser's stored data is cleared.

Future improvements could include database integration and user authentication.

## 9. Conclusion

Developing this system allowed me to apply JavaScript and React concepts in a practical project. It demonstrates student record management, form validation, state management, reusable components, event handling, and dashboard statistics.


