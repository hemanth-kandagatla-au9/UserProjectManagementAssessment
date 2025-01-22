// File: frontend/src/pages/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CreateTask = () => {
    const [formData, setFormData] = useState({
        task_title: "",
        task_description: "",
        task_deadline: null,
        task_status: '',
        assigned_user: ''
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    task_title: formData.task_title,
                    task_description: formData.task_description,
                    task_deadline: formData.task_deadline,
                    task_status: formData.task_status,
                    assigned_user: formData.assigned_user,
                }
            );

            // Store the token in localStorage
            localStorage.setItem("token", response.data.token);

            setSuccess("Project creation successful! Redirecting to Project List ...");
            setTimeout(() => navigate("/projectlist"), 2000);
        } catch (err) {
            setError(
                err.response?.data?.message || "Login failed. Please try again."
            );
        }
    };

    const Tasks = [
        {
            task_id: '001',
            task_title: 'a',
            task_description: 'des 1',
            task_status: 'aaa',
            task_deadline: '21-01-2025',
            assigned_user: 'Jhon 1'
        },
        {
            task_id: '002',
            task_title: 'b',
            task_description: 'des 2',
            task_status: 'bbb',
            task_deadline: '21-01-2025',
            assigned_user: 'Jhon 2'
        }
    ]

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task_title">Task Title</label>
                    <input
                        type="text"
                        name="task_title"
                        id="task_title"
                        value={formData.task_title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="task_description">Task Description</label>
                    <input
                        type="text"
                        name="task_description"
                        id="task_description"
                        value={formData.task_description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="task_deadline">Deadline</label>
                    <input
                        type="date"
                        name="task_deadline"
                        id="task_deadline"
                        value={formData.task_deadline}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="task_status">Task Status</label>
                    <input
                        type="task_status"
                        name="task_status"
                        id="task_status"
                        value={formData.task_status}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="assigned_user">Assigned User</label>
                    <input
                        type="assigned_user"
                        name="assigned_user"
                        id="assigned_user"
                        value={formData.assigned_user}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={styles.error}>{error}</p>}
                {success && <p style={styles.success}>{success}</p>}
                <button type="submit" style={styles.button}>
                    Create Task
                </button>
            </form>

            <hr />
            <h2> Tasks list for this Project </h2>

            {
                Tasks.map(each =>
                    <div>
                        <p> ID: {each.task_id} </p>
                        <p> Title: {each.task_title} </p>
                        <p> Description: {each.task_description} </p>
                        <p> Task Status: {each.task_status} </p>
                        <p> Deadline: {each.task_deadline} </p>
                        <p> Assigned User: {each.assigned_user} </p>
                        <hr />
                    </div>
                )
            }
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    error: {
        color: "red",
    },
    success: {
        color: "green",
    },
};

export default CreateTask;
