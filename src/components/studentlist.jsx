import React, { useState, useEffect } from "react";
import "./StudentList.css"; 

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentList = async () => {
      try {
        const response = await fetch(
          "https://g-srinagavenkat.github.io/student/Student.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch StudentList");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching student list:", error);
      }
    };

    fetchStudentList();
  }, []);

  return (
    <div className="container-fluid"> 
      <table className="table table-striped"  style={{ padding: '10px' }}> 
        <thead>
          <tr>
            <th>S. No</th>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.RollNo}</td>
              <td>{student.Name}</td>
              <td>{student.EmailID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
