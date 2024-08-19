import { useState } from "react";
import "./App.css";
import "remixicon/fonts/remixicon.css";

function App() {
  const model = {
    fullname: "",
    class: "",
    roll: "",
    subject: "",
    dob: "",
  };
  const [editIndex, setEditIndex] = useState(null);
  const [right, setRight] = useState(-450);
  const [student, setStudent] = useState([]);
  const [form, setForm] = useState(model);

  const handleDrawer = () => {
    setRight(0);
  };

  const handleInput = (e) => {
    const input = e.target;
    const key = input.name;
    const value = input.value;
    // console.log(key, value);
    setForm({
      ...form,
      [key]: value,
    });
    // console.log(form);
  };

  const createStudent = (e) => {
    e.preventDefault();
    setStudent([...student, form]);
    setForm(model);
    setRight(-450);
  };

  const deleteStudent = (index) => {
    const backupStudent = [...student];
    backupStudent.splice(index, 1);
    setStudent(backupStudent);
  };

  const editStudent = (index) => {
    setRight(0);
    setForm(student[index]);
    setEditIndex(index);
  };

  const saveStudent = (e) => {
    e.preventDefault();
    const backupStudent = [...student];
    backupStudent[editIndex] = form;
    setStudent(backupStudent);
    setForm(model);
    setEditIndex(null);
    setRight(-450);
  };

  const closeDrawer = () => {
    setRight(-450);
    setForm(model);
  };
  return (
    <div style={{ background: "#ddd", minHeight: "100vh" }}>
      <div
        style={{
          width: "70%",
          background: "white",
          margin: "32px auto",
          padding: 32,
        }}
      >
        <h1 style={{ padding: 0, margin: 0, textAlign: "center" }}>
          {" "}
          Crud Application
        </h1>
        <button
          onClick={handleDrawer}
          style={{
            border: "none",
            background: "#8407ba",
            color: "white",
            padding: "14px 24px",
            borderRadius: 4,
            fontSize: 16,
            margin: "24px 0",
          }}
        >
          <i className="ri-user-add-line" style={{ marginRight: 8 }}></i>
          Add New Student
        </button>
        <table className="crud-app">
          <thead>
            <tr>
              <th>S/no</th>
              <th>Student's name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Roll</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.fullname}</td>
                <td>{item.subject}</td>
                <td>{item.class}</td>
                <td>{item.roll}</td>
                <td>{item.dob}</td>
                <td>
                  <div>
                    <button
                      onClick={() => editStudent(index)}
                      style={{
                        border: "none",
                        width: 32,
                        height: 32,
                        background: "#07c65d",
                        color: "white",
                        borderRadius: 4,
                        marginRight: 12,
                      }}
                    >
                      <i className="ri-image-edit-line"></i>
                    </button>
                    <button
                      onClick={() => deleteStudent(index)}
                      style={{
                        border: "none",
                        width: 32,
                        height: 32,
                        background: "red",
                        color: "white",
                        borderRadius: 4,
                      }}
                    >
                      <i className="ri-delete-bin-6-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: right,
          width: 450,
          height: "100%",
          background: "white",
          boxShadow: "0 0 40px rgba(0,0,0,0.2)",
          padding: 32,
          boxSizing: "border-box",
          transition: "0.3s",
        }}
      >
        <button
          onClick={closeDrawer}
          style={{
            border: "none",
            background: "transparent",
            fontSize: 18,
            color: "#8407ba",
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          {" "}
          <i className="ri-close-circle-line"></i>
        </button>
        <h1 style={{ textAlign: "center" }}>New Student</h1>
        <form
          onSubmit={editIndex === null ? createStudent : saveStudent}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            // marginTop: "70px",
          }}
        >
          <input
            required
            value={form.fullname}
            onChange={handleInput}
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />
          <input
            required
            value={form.class}
            onChange={handleInput}
            name="class"
            type="number"
            placeholder="Enter your class"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />
          <input
            value={form.roll}
            onChange={handleInput}
            name="roll"
            type="number"
            placeholder="Enter your roll"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />
          <input
            value={form.subject}
            onChange={handleInput}
            type="text"
            name="subject"
            placeholder="Enter your subject"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />
          <input
            value={form.dob}
            onChange={handleInput}
            type="date"
            name="dob"
            placeholder="Enter your fullname"
            style={{
              border: "1px solid #ccc",
              padding: 16,
              borderRadius: 4,
            }}
          />
          {editIndex === null ? (
            <button
              style={{
                border: "none",
                background: "#8407BA",
                color: "white",
                fontSize: 16,
                padding: "14px 0",
                borderRadius: 4,
              }}
            >
              SUBMIT
            </button>
          ) : (
            <button
              style={{
                border: "none",
                background: "deeppink",
                color: "white",
                fontSize: 16,
                padding: "14px 0",
                borderRadius: 4,
              }}
            >
              SAVE
            </button>
          )}
        </form>
      </aside>
    </div>
  );
}

export default App;
