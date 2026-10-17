import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import Dashboard from './pages/home';
import StudentTable from './pages/students';


function App() {

    // Load student records from localStorage

    var [students, setStudents] = useState(function () {

        var savedStudents = localStorage.getItem('students');

        if (savedStudents) {

            try {
                return JSON.parse(savedStudents);
            } catch (error) {
                console.error('Error loading students:', error);
                return [];
            }

        }

        return [];

    });


    // Save student records whenever they change

    useEffect(function () {

        localStorage.setItem('students', JSON.stringify(students));

    }, [students]);


    return (

        <BrowserRouter>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/students">Students</Link>
            </nav>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard students={students} />}
                />

                <Route
                    path="/students"
                    element={
                        <StudentTable
                            students={students}
                            setStudents={setStudents}
                        />
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;